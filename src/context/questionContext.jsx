import { createContext, useContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { questionApi } from '../api/question';

const QuestionsContext = createContext();

const initialState = {
  isUpdateQuestionsModalOpen: false,
  isAddQuestionsModalOpen: false,
  questionsById: [],
  isQuestionsLoading: false,
  error: '',
  skillDomainName: '',
  skillDomain: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isQuestionsLoading: true,
      };
    case 'questionsBySkillDomainId/set':
      return {
        ...state,
        questionsById: action.payload,
      };
    case 'questions/created':
      return {
        ...state,
        isQuestionsLoading: false,
        questionsById: [action.payload],
      };
    case 'questions/updated':
      return {
        ...state,
        isQuestionsLoading: false,
        questionsById: [action.payload],
      };
    case 'updateQuestionsModal/open':
      return {
        ...state,
        isUpdateQuestionsModalOpen: true,
      };
    case 'updateQuestionsModal/close':
      return {
        ...state,
        isUpdateQuestionsModalOpen: false,
      };
    case 'addQuestionsModal/open':
      return {
        ...state,
        isAddQuestionsModalOpen: true,
      };
    case 'addQuestionsModal/close':
      return {
        ...state,
        isAddQuestionsModalOpen: false,
      };
    case 'skillDomain/set':
      return {
        ...state,
        skillDomain: action.payload,
      };
    case 'skillDomainName/set':
      return {
        ...state,
        skillDomainName: action.payload,
      };
    case 'rejected':
      return {
        ...state,
        isQuestionsLoading: false,
        error: action.payload,
      };
    default:
      throw new Error('Unknown action type');
  }
};

const QuestionsProvider = ({ children }) => {
  const [
    {
      isUpdateQuestionsModalOpen,
      isAddQuestionsModalOpen,
      questionsById,
      isQuestionsLoading,
      error,
      skillDomainName,
      skillDomain,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const handleUpdateQuestionsModalToggle = (state) => {
    dispatch({ type: `updateQuestionsModal/${state}` });
  };

  const handleAddQuestionsModalToggle = (state) => {
    dispatch({ type: `addQuestionsModal/${state}` });
  };

  const handleSetQuestionsById = (questions) => {
    dispatch({ type: 'questionsBySkillDomainId/set', payload: questions });
  };

  const handleCreateQuestions = async (newQuestions) => {
    dispatch({ type: 'loading' });

    try {
      const res = await questionApi.createQuestions(newQuestions);

      dispatch({ type: 'questions/created', payload: res.data.questions });
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error creating the questions.',
      });
    }
  };

  const handleUpdateQuestions = async (updatedQuestions) => {
    dispatch({ type: 'loading' });

    try {
      const res = await questionApi.updateQuestions(updatedQuestions);

      dispatch({ type: 'questions/updated', payload: res.data });
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error updating the questions.',
      });
    }
  };

  const handleSetSkillDomainName = (name) => {
    dispatch({ type: 'skillDomainName/set', payload: name });
  };

  const handleSetSkillDomain = (skillDomain) => {
    dispatch({ type: 'skillDomain/set', payload: skillDomain });
  };

  const value = useMemo(() => {
    return {
      isUpdateQuestionsModalOpen,
      handleUpdateQuestionsModalToggle,
      isAddQuestionsModalOpen,
      handleAddQuestionsModalToggle,
      questionsById,
      handleCreateQuestions,
      handleUpdateQuestions,
      isQuestionsLoading,
      error,
      skillDomainName,
      handleSetSkillDomainName,
      skillDomain,
      handleSetSkillDomain,
      handleSetQuestionsById,
    };
  }, [
    isUpdateQuestionsModalOpen,
    isAddQuestionsModalOpen,
    skillDomain,
    skillDomainName,
    error,
    questionsById,
    isQuestionsLoading,
  ]);

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
};

QuestionsProvider.propTypes = {
  children: PropTypes.node,
};

const useQuestions = () => {
  const context = useContext(QuestionsContext);

  if (!context) {
    throw new Error('useContext must be used within the QuestionsProvider');
  }

  return context;
};

export { QuestionsProvider, useQuestions };
