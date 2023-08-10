import authApi from '@apis/auth';

export const getTodayPartner = () => {
  return authApi.get('api/partner/today');
};

export const getPartnerList = () => {
  return authApi.get('api/partner/history');
}