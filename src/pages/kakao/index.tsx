import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getMyProfile, login } from '@apis/user';
import { MAIN_PAGE } from '@constants/route';
import { queryKeys } from '@constants/querykeys';
import { getAccessTokenFromCookie, setAccessTokenToCookie, setRefreshTokenToCookie } from '@utils/token';

const Kakao = () => {
  const router = useRouter();

  useQuery(queryKeys.signUp, () => login({ code: router.asPath.slice(12) as string }), {
    onSuccess: (response) => {
      setAccessTokenToCookie(response.data.data.accessToken);
      setRefreshTokenToCookie(response.data.data.refreshToken);
    },
    onError: (response) => {
      console.log(response);
    },
  });

  useQuery(queryKeys.me, () => getMyProfile(), {
    enabled: !!getAccessTokenFromCookie(),
    onSuccess: (response) => {
      const { data: user } = response;

      localStorage.setItem('userId', user.member.id);
      localStorage.setItem('userIsEdited', user.member.isEdited);

      router.replace(MAIN_PAGE);
    },
  });

  return null;
};

export default Kakao;
