import Cookies from 'js-cookie';

export const setAccessTokenToCookie = (token: string) => {
  Cookies.set('AccessToken', token, { expires: 7 * 24 * 60 * 60 });
};

export const setRefreshTokenToCookie = (token: string) => {
  Cookies.set('RefreshToken', token, { expires: 7 * 24 * 60 * 60 });
};

export const getAccessTokenFromCookie = () => {
  return Cookies.get('AccessToken');
};

export const getRefreshTokenFromCookie = () => {
  return Cookies.get('RefreshToken');
};
