import skillMatrixApi from './services/skillMatrix';

const pathName = 'managers';

export const managerApi = {
  fetchManager: () => {
    return skillMatrixApi.get(pathName);
  },
};
