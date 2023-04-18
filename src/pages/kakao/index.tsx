import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { login } from '@apis/user';
import { MAIN_PAGE } from '@constants/route';

const Kakao = () => {
  const router = useRouter();

  useQuery(['signUp'], () => login({ code: router.asPath.slice(12) as string }), {
    onSuccess: (response) => {
      Cookies.set('AccessToken', response.data.data.accessToken, { expires: 7 * 24 * 60 * 60 });
      Cookies.set('RefreshToken', response.data.data.refreshToken, { expires: 7 * 24 * 60 * 60 });
      router.replace('/');
    },
    onError: (response) => {
      console.log(response);
    },
  });
  /*
  useEffect(() => {
    if (code)
      login2({ code: code as string }).then((res) => {
        console.log(res);
      });
  }, [code]);
  */

  return null;
};

export default Kakao;
