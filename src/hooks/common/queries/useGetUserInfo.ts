import { useGetMyProfile } from '@hooks/MyPage/queries';
import { AxiosError } from 'axios';

interface ErrorType {
  data: any;
  errorCode: string;
  message: string;
  result: string;
}

const useGetUserInfo = () => {
  const { data: user, error } = useGetMyProfile();
  const currentUserId = user?.data.member.id;
  const currentUserIsEdited = user?.data.member.isEdited;
  let isLogin;

  if (error) {
    const { response } = error as AxiosError;
    const errorResponse = response?.data as ErrorType;
    if (errorResponse.errorCode === 'ST005') isLogin = false;
  } else isLogin = true;

  return { isLogin, currentUserId, currentUserIsEdited };
};

export default useGetUserInfo;
