import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { login } from '@apis/user';
import { MAIN_PAGE } from '@constants/route';
import { queryKeys } from '@constants/querykeys';
import { setAccessTokenToCookie, setRefreshTokenToCookie } from '@utils/token';

const Kakao = () => {
  const router = useRouter();

  useQuery(queryKeys.signUp, () => login({ code: router.asPath.slice(12) as string }), {
    onSuccess: (response) => {
      setAccessTokenToCookie(response.data.data.accessToken);
      setRefreshTokenToCookie(response.data.data.refreshToken);
      router.replace(MAIN_PAGE);
    },
    onError: (response) => {
      console.log(response);
    },
  });

  return null;
};

export default Kakao;
