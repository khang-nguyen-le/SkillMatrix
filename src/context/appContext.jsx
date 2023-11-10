import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';

const AppStateContext = createContext();

const initialState = {
  formInfo: {},
  currentStep: 0,
  isLoading: false,
  error: '',
  currentTab: '1',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
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
        currentStep: state.currentStep + 1,
      };
    case 'currentStep/descreased':
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case 'currentStep/reset':
      return {
        ...state,
        currentStep: 0,
      };
    case 'currentTab/setCurrentTab':
      return {
        ...state,
        currentTab: action.payload,
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
  const [{ formInfo, currentStep, isLoading, currentTab }, dispatch] =
    useReducer(reducer, initialState);

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

  const handleResetForm = useCallback(() => {
    dispatch({ type: 'form/reset' });
  }, []);

  const handleResetCurrentStep = useCallback(() => {
    dispatch({ type: 'currentStep/reset' });
  }, []);

  const handleSetCurrentTab = (key) => {
    dispatch({ type: 'currentTab/setCurrentTab', payload: key });
  };

  const value = useMemo(() => {
    return {
      formInfo,
      currentStep,
      handleResetCurrentStep,
      isLoading,
      handleResetForm,
      handleAddForm,
      handleNextStep,
      handlePrevStep,
      currentTab,
      handleSetCurrentTab,
    };
  }, [
    currentStep,
    currentTab,
    formInfo,
    handleResetCurrentStep,
    handleResetForm,
    isLoading,
  ]);

  return (
    <AppStateContext.Provider value={value}>
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
