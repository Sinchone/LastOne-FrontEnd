import { getAccessTokenFromCookie } from './token';

export const getUserEmailFromToken = () => {
  const token = getAccessTokenFromCookie();

  if (token) {
    const base64Payload = token.split('.')[1];
    const payload = Buffer.from(base64Payload, 'base64');
    const result = JSON.parse(payload.toString());

    return result.sub;
  }
};
