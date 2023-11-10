import skillMatrixApi from './services/skillMatrix';

export const questionApi = {
  fetchQuestions: () => {
    return skillMatrixApi.get('/surveyQuestions');
  },
  getQuestionsById: (id) => {
    return skillMatrixApi.get(`/surveyQuestions?skillDomainId=${id}`);
  },

  createQuestions: (question) => {
    return skillMatrixApi.post('/surveyQuestions', question);
  },

  deleteQuestions: (question) => {
    return skillMatrixApi.post('/surveyQuestions', question);
  },

  updateQuestions: (updatedQuestion) => {
    return skillMatrixApi.patch(
      `/surveyQuestions/${updatedQuestion.id}`,
      updatedQuestion,
    );
  },
};
