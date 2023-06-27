import api from '@apis/base';
import { getAccessTokenFromCookie } from '@utils/token';

export const getTodayPartner = () => {
  const accessToken = getAccessTokenFromCookie();
  return api.get({
    url: 'api/partner/today',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
