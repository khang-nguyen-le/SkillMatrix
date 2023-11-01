import skillMatrixApi from './services/skillMatrix';

const pathName = '/domains';

export const domainApi = {
  fetchDomains: () => {
    return skillMatrixApi.get(pathName);
  },

  createDomain: (newDomain) => {
    return skillMatrixApi.post(pathName, newDomain);
  },

  deleteDomain: (id) => {
    let url = `${pathName}/${id}`;
    return skillMatrixApi.delete(url);
  },

  getDomainById: (id) => {
    let url = `${pathName}/${id}`;
    return skillMatrixApi.get(url);
  },

  updateDomain: (updatedDomain) => {
    let url = `${pathName}/${updatedDomain.id}`;
    return skillMatrixApi.put(url, updatedDomain);
  },

  queryDomains: (query) => {
    let url = `${pathName}?domainName_like=${query}`;
    return skillMatrixApi.get(url);
  },
};
