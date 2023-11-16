import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { surveyFormApi } from '../api/surveyForm';

const CreatedFormContext = createContext();

const initialState = {
  createdForms: [],
  isLoading: false,
  error: '',
  importedDomain: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'createdForms/loaded':
      return {
        ...state,
        isLoading: false,
        createdForms: action.payload,
      };
    case 'createdForm/created':
      return {
        ...state,
        isLoading: false,
        createdForms: [...state.createdForms, action.payload],
      };
    case 'createdForms/deleted':
      return {
        ...state,
        isLoading: false,
        createdForms: state.createdForms.filter(
          (createdForm) => createdForm.id !== action.payload,
        ),
      };
    case 'domain/imported':
      return {
        ...state,
        isLoading: false,
        importedDomain: action.payload,
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

const CreatedFormProvider = ({ children }) => {
  const [{ createdForms, isLoading, error, importedDomain }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    const fetchForms = async () => {
      dispatch({ type: 'loading' });
      try {
        const res = await surveyFormApi.fetchForms();

        dispatch({ type: 'createdForms/loaded', payload: res.data });
      } catch (err) {
        dispatch({
          type: 'rejected',
          payload: 'There was an error fetching the created forms',
        });
      }
    };
    fetchForms();
  }, []);

  const handleCreateForm = async (newForm) => {
    dispatch({ type: 'loading' });
    try {
      const res = await surveyFormApi.createForm(newForm);

      dispatch({ type: 'createdForm/created', payload: res.data });
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error delete the created form',
      });
    }
  };

  const handleDeleteForm = async (formId) => {
    dispatch({ type: 'loading' });
    try {
      await surveyFormApi.deleteForm(formId);

      dispatch({ type: 'createdForms/deleted', payload: formId });
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error deleting the created form',
      });
    }
  };

  const handleUploadForm = async (form) => {
    dispatch({ type: 'loading' });

    try {
      const res = await surveyFormApi.createForm(form);

      dispatch({ type: 'createdForm/created', payload: res.data });
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error uploading the created form',
      });
    }
  };

  const value = useMemo(() => {
    return {
      createdForms,
      isLoading,
      error,
      handleDeleteForm,
      handleCreateForm,
      handleUploadForm,
      importedDomain,
    };
  }, [createdForms, isLoading, error, importedDomain]);
  return (
    <CreatedFormContext.Provider value={value}>
      {children}
    </CreatedFormContext.Provider>
  );
};

CreatedFormProvider.propTypes = {
  children: PropTypes.node,
};

const useCreatedFormState = () => {
  const context = useContext(CreatedFormContext);

  if (!context) {
    throw new Error(
      'useCreatedFormState must be used within the CreatedFormProvider',
    );
  }
  return context;
};

export { CreatedFormProvider, useCreatedFormState };
