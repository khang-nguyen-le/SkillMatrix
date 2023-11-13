import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { domainApi } from '../api/domain';
import { message } from 'antd';

const DomainsContext = createContext();

const initialState = {
  isAddDomainModalOpen: false,
  isUpdateDomainModalOpen: false,
  isImportDomainModalOpen: false,
  isDomainLoading: false,
  domains: [],
  domain: {},
  skillDomains: [],
  error: '',
  queryDomains: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isDomainLoading: true,
      };
    case 'domains/loaded':
      return {
        ...state,
        isDomainLoading: false,
        domains: action.payload,
      };
    case 'domain/added':
      return {
        ...state,
        isDomainLoading: false,
        domains: [...state.domains, action.payload],
      };
    case 'domain/loaded':
      return {
        ...state,
        isDomainLoading: false,
        domain: action.payload,
      };
    case 'skillDomains/added':
      return {
        ...state,
        isDomainLoading: false,
        skillDomains: [...state.skillDomains, action.payload],
      };
    case 'domain/deleted':
      return {
        ...state,
        isDomainLoading: false,
        domains: state.domains.filter((domain) => domain.id !== action.payload),
      };
    case 'domain/updated':
      return {
        ...state,
        isDomainLoading: false,
        domains: action.payload,
      };
    case 'domains/query':
      return {
        ...state,
        isDomainLoading: false,
        queryDomains: action.payload,
      };
    case 'addDomainModal/open':
      return {
        ...state,
        isAddDomainModalOpen: true,
      };
    case 'addDomainModal/close':
      return {
        ...state,
        isAddDomainModalOpen: false,
      };
    case 'importDomainModal/open':
      return {
        ...state,
        isImportDomainModalOpen: true,
      };
    case 'importDomainModal/close':
      return {
        ...state,
        isImportDomainModalOpen: false,
      };
    case 'updateDomainModal/open':
      return {
        ...state,
        isUpdateDomainModalOpen: true,
      };
    case 'updateDomainModal/close':
      return {
        ...state,
        isUpdateDomainModalOpen: false,
      };
    case 'rejected':
      return {
        ...state,
        isDomainLoading: false,
        error: action.payload,
      };
    default:
      throw new Error('Unknown action type');
  }
};

const DomainsProvider = ({ children }) => {
  const [
    {
      isAddDomainModalOpen,
      isUpdateDomainModalOpen,
      isImportDomainModalOpen,
      isDomainLoading,
      domains,
      domain,
      error,
      queryDomains,
      skillDomains,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchDomains = async () => {
      dispatch({ type: 'loading' });

      try {
        const res = await domainApi.fetchDomains();

        dispatch({ type: 'domains/loaded', payload: res.data });
      } catch (err) {
        alert('There was an error fetching the domains');
      } finally {
        dispatch({
          type: 'rejected',
          payload: 'There was an error fetching domains.',
        });
      }
    };

    fetchDomains();
  }, []);

  const handleAddDomainModalToggle = (state) => {
    dispatch({ type: `addDomainModal/${state}` });
  };

  const handleImportDomainModalToggle = (state) => {
    dispatch({ type: `importDomainModal/${state}` });
  };

  const handleUpdateDomainModalToggle = (state) => {
    dispatch({ type: `updateDomainModal/${state}` });
  };

  const handleAddDomain = async (newDomain) => {
    dispatch({ type: 'loading' });

    try {
      const res = await domainApi.createDomain(newDomain);

      dispatch({ type: 'domain/added', payload: res.data });
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error adding the domain.',
      });
    } finally {
      dispatch({ type: 'addDomainModal/close' });
    }
  };

  const handleDeleteDomain = async (domainId) => {
    dispatch({ type: 'loading' });

    try {
      await domainApi.deleteDomain(domainId);

      dispatch({
        type: 'domain/deleted',
        payload: domainId,
      });

      message.success('You successfully deleted the domain');
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error deleting the domain.',
      });
    }
  };

  const handleGetDomain = async (id) => {
    dispatch({ type: 'updateDomainModal/open' });
    try {
      const res = await domainApi.getDomainById(id);

      dispatch({ type: 'domain/loaded', payload: res.data });
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error loading the domain.',
      });
    }
  };

  const handleUpdateDomain = useCallback(
    async (updatedDomain) => {
      dispatch({ type: 'loading' });

      try {
        const res = await domainApi.updateDomain(updatedDomain);

        const newDomains = [...domains];

        const updatedDomainIndex = newDomains.findIndex(
          (newDomain) => newDomain.id === res.data.id,
        );

        if (updatedDomainIndex !== -1)
          newDomains[updatedDomainIndex] = res.data;

        dispatch({ type: 'domain/updated', payload: newDomains });
      } catch (err) {
        dispatch({
          type: 'rejected',
          payload: 'There was an error updating the domain.',
        });
      }
    },
    [domains],
  );

  const handleQueryDomains = async (keyword) => {
    dispatch({ type: 'loading' });
    try {
      const res = await domainApi.queryDomains(keyword);

      dispatch({ type: 'domains/query', payload: res.data });
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error querying domains.',
      });
    }
  };

  const value = useMemo(() => {
    return {
      isAddDomainModalOpen,
      isUpdateDomainModalOpen,
      isImportDomainModalOpen,
      handleImportDomainModalToggle,
      isDomainLoading,
      domains,
      domain,
      error,
      queryDomains,
      handleAddDomainModalToggle,
      handleUpdateDomainModalToggle,
      handleAddDomain,
      handleDeleteDomain,
      handleGetDomain,
      handleUpdateDomain,
      handleQueryDomains,
      skillDomains,
    };
  }, [
    domain,
    domains,
    error,
    handleUpdateDomain,
    isAddDomainModalOpen,
    isDomainLoading,
    isUpdateDomainModalOpen,
    queryDomains,
    skillDomains,
    isImportDomainModalOpen,
  ]);

  return (
    <DomainsContext.Provider value={value}>{children}</DomainsContext.Provider>
  );
};

const useDomains = () => {
  const context = useContext(DomainsContext);

  if (!context) {
    throw new Error('useDomains must be used within the DomainsProvider');
  }

  return context;
};

DomainsProvider.propTypes = {
  children: PropTypes.node,
};

export { DomainsProvider, useDomains };
