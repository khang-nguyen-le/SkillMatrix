import { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';

const BASE_URL = 'http://localhost:8000';

const AppStateContext = createContext();

const initialState = {
  formInfo: {},
  currentStep: 0,
  isAddDomainModalOpen: false,
  isUpdateDomainModalOpen: false,
  isLoading: false,
  domains: [],
  domain: {},
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'domains/loaded':
      return {
        ...state,
        isLoading: false,
        domains: action.payload,
      };
    case 'domain/loaded':
      return {
        ...state,
        domain: action.payload,
      };
    case 'domain/added':
      return {
        ...state,
        isLoading: false,
        domains: [...state.domains, action.payload],
      };
    case 'domain/deleted':
      return {
        ...state,
        isLoading: false,
        domains: state.domains.filter((domain) => domain.id !== action.payload),
      };
    case 'domain/updated':
      return {
        ...state,
        isLoading: false,
        domains: action.payload,
      };
    case 'form/added':
      return {
        ...state,
        formInfo: { ...state.formInfo, ...action.payload },
      };
    case 'form/reset':
      return {
        ...state,
        formInfo: {},
      };

    case 'currentStep/increased':
      return {
        ...state,
        currentStep: state.currentStep++,
      };
    case 'currentStep/descreased':
      return {
        ...state,
        currentStep: state.currentStep--,
      };
    case 'currentStep/reset':
      return {
        ...state,
        currentStep: 0,
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
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error('Unknown action type');
  }
};

const AppProvider = ({ children }) => {
  const [
    {
      formInfo,
      currentStep,
      isAddDomainModalOpen,
      isUpdateDomainModalOpen,
      isLoading,
      domains,
      domain,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchDomains = async () => {
      dispatch({ type: 'loading' });
      try {
        const res = await fetch(`${BASE_URL}/domains`);
        const data = await res.json();

        dispatch({ type: 'domains/loaded', payload: data });
      } catch (err) {
        dispatch({
          type: 'rejected',
          payload: 'There was an error fetching domains.',
        });
      }
    };

    fetchDomains();
  }, []);

  const handleAddForm = (data) => {
    if (data.startDate && data.endDate) {
      const newData = {
        ...data,
        startDate: data.startDate['$d'].toISOString(),
        endDate: data.endDate['$d'].toISOString(),
      };
      dispatch({ type: 'form/added', payload: newData });
      return;
    }

    dispatch({ type: 'form/added', payload: data });
  };

  const handleNextStep = () => {
    dispatch({ type: 'currentStep/increased' });
  };

  const handlePrevStep = () => {
    dispatch({ type: 'currentStep/descreased' });
  };

  const handleAddDomainModalToggle = (state) => {
    dispatch({ type: `addDomainModal/${state}` });
  };

  const handleUpdateDomainModalToggle = (state) => {
    dispatch({ type: `updateDomainModal/${state}` });
  };

  const handleResetForm = () => {
    dispatch({ type: 'form/reset' });
  };

  const handleResetCurrentStep = () => {
    dispatch({ type: 'currentStep/reset' });
  };

  const handleAddDomain = async (newDomain) => {
    dispatch({ type: 'loading' });

    try {
      const res = await fetch(`${BASE_URL}/domains`, {
        method: 'POST',
        body: JSON.stringify(newDomain),
        headers: {
          'content-type': 'application/json',
        },
      });

      const data = await res.json();

      dispatch({ type: 'domain/added', payload: data });
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error adding the domain.',
      });
    } finally {
      dispatch({ type: 'addDomainModal/close' });
    }
  };

  const handleDeleteDomain = async (id) => {
    dispatch({ type: 'loading' });

    try {
      await fetch(`${BASE_URL}/domains/${id}`, {
        method: 'DELETE',
      });

      dispatch({ type: 'domain/deleted', payload: id });

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
      const res = await fetch(`${BASE_URL}/domains/${id}`);
      const data = await res.json();

      dispatch({ type: 'domain/loaded', payload: data });
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error loading the domain.',
      });
    }
  };

  const handleUpdateDomain = async (updatedDomain) => {
    dispatch({ type: 'loading' });

    try {
      const res = await fetch(`${BASE_URL}/domains/${updatedDomain.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedDomain),
        headers: {
          'content-type': 'application/json',
        },
      });

      const data = await res.json();

      const newDomains = [...domains];

      const updatedDomainIndex = newDomains.findIndex(
        (newDomain) => newDomain.id === data.id,
      );

      if (updatedDomainIndex !== -1) newDomains[updatedDomainIndex] = data;

      dispatch({ type: 'domain/updated', payload: newDomains });
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error updating the domain.',
      });
    }
  };

  return (
    <AppStateContext.Provider
      value={{
        formInfo,
        currentStep,
        handleResetCurrentStep,
        isUpdateDomainModalOpen,
        isAddDomainModalOpen,
        isLoading,
        domains,
        domain,
        handleUpdateDomainModalToggle,
        handleResetForm,
        handleAddForm,
        handleNextStep,
        handlePrevStep,
        handleAddDomainModalToggle,
        handleAddDomain,
        handleDeleteDomain,
        handleGetDomain,
        handleUpdateDomain,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

const useAppState = () => {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error('useAppState must be used within the AppProvider');
  }

  return context;
};

export { AppProvider, useAppState };
