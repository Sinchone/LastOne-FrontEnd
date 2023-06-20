import Cookies from 'js-cookie';

const accessTokenValidTime = new Date(new Date().getTime() + 3 * 60 * 60 * 1000); // 3 hours
const refreshTokenValidTime = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days

export const setAccessTokenToCookie = (token: string) => {
  Cookies.set('AccessToken', token, { expires: accessTokenValidTime });
};

export const setRefreshTokenToCookie = (token: string) => {
  Cookies.set('RefreshToken', token, { expires: refreshTokenValidTime });
};

export const getAccessTokenFromCookie = () => {
  return Cookies.get('AccessToken');
};

export const getRefreshTokenFromCookie = () => {
  return Cookies.get('RefreshToken');
};

export const removeAccessTokenToCookie = () => {
  Cookies.remove('AccessToken');
};

export const removeRefreshTokenToCookie = () => {
  Cookies.remove('RefreshToken');
};
