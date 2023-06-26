import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getMyProfile, login } from '@apis/user';
import { MAIN_PAGE } from '@constants/route';
import { queryKeys } from '@constants/querykeys';
import { getAccessTokenFromCookie, setAccessTokenToCookie, setRefreshTokenToCookie } from '@utils/token';
import { useRecoilState } from 'recoil';
import { currentUserState } from '@recoil/userState';

const Kakao = () => {
  const router = useRouter();
  const [, setCurrentUser] = useRecoilState(currentUserState);

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

      setCurrentUser({
        id: user.member.id,
        isEdited: user.member.isEdited,
      });

      router.replace(MAIN_PAGE);
    },
    onError: (response) => {
      console.log(response);
    },
  });

  return null;
};

export default Kakao;
