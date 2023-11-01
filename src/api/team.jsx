import skillMatrixApi from './services/skillMatrix';

const pathName = '/teams';

export const teamApi = {
  fetchTeams: () => {
    return skillMatrixApi.get(pathName);
  },
};
