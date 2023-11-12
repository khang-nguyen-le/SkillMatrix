import skillMatrixApi from './services/skillMatrix';

export const responseApi = {
  getResponseByRespondentId: (id) => {
    return skillMatrixApi.get(`/responses?respondentId=${id}`);
  },
};
