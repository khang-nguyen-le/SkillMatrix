import skillMatrixApi from './services/skillMatrix';

export const surveyFormApi = {
  fetchForms: () => {
    return skillMatrixApi.get('/createdForms');
  },
  createForm: (newForm) => {
    return skillMatrixApi.post('/createdForms', newForm);
  },
  deleteForm: (formId) => {
    return skillMatrixApi.delete(`/createdForms/${formId}`);
  },
  getFormById: (id) => {
    return skillMatrixApi.get(`/createdForms/${id}`);
  },
};
