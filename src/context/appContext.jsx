import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppStateContext = createContext();
const AppProvider = ({ children }) => {
  const [formInfo, setFormInfo] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const handleAddForm = (data) => {
    if (data.startDate && data.endDate) {
      setFormInfo({
        ...formInfo,
        ...data,
        startDate: data.startDate['$d'].toISOString(),
        endDate: data.endDate['$d'].toISOString(),
      });
      return;
    }
    setFormInfo({ ...formInfo, ...data });
  };

  const handleNextStep = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const handleResetStep = () => {
    setCurrentStep(0);
  };

  return (
    <AppStateContext.Provider
      value={{
        formInfo,
        currentStep,
        setCurrentStep,
        setFormInfo,
        onAddForm: handleAddForm,
        onNextStep: handleNextStep,
        onPrevStep: handlePrevStep,
        onResetStep: handleResetStep,
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