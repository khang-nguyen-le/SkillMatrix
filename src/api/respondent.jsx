import skillMatrixApi from './services/skillMatrix';

export const respondentApi = {
  fetchRespondents: (formId) => {
    return skillMatrixApi.get(`/respondents?formId=${formId}`);
  },
  getRespondentById: (id) => {
    return skillMatrixApi.get(`/respondents/${id}`);
  },
};
