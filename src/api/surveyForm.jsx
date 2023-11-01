import skillMatrixApi from './services/skillMatrix';

export const surveyFormApi = {
  fetchForms: () => {
    return skillMatrixApi.get('/createdForms');
  },
  createForm: (newForm) => {
    return skillMatrixApi.post('/createdForms', newForm);
  },
};