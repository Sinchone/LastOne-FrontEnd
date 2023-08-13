import * as S from './style';
import ProfileIcon from '@assets/icon/profile.svg';
import { useRouter } from 'next/router';

const OtherMessage = () => {
  const router = useRouter();

  return (
    <S.MessageWrapper>
      <S.ProfileButton
      // onClick={() => {
      //   router.push(`/mypage/${c.otherUserId}`);
      // }}
      >
        <S.ImageWrapper>
          {/* {c.profileUrl ? (
                    <Image
                      src={createImageUrl(c.profileUrl as string)}
                      width={500}
                      height={500}
                      alt='profileImg'
                    /> */}
          {/* ) : (
                    <ProfileIcon />
                  )} */}
          <ProfileIcon />
        </S.ImageWrapper>
      </S.ProfileButton>
      <S.Message>
        안녕하세요최대글자테스ㅁㄴ어ㅏ리먼아ㅣ;럼ㄴ;ㅇ러미fasdkfja;sdjfadf;ajdf;lajd;fjaㅁㄴ아ㅓ림;ㅏㅓㅇㄹ;머이;ㅏ럼ㄴ이ㅏ;럼ㅇ;ㅏㅁㄹ넝ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ;ㅏ어림어리;멍라ㅣ먼아ㅣㄹ;ㅏ머ㅏㅇ;럼ㄴ;ㅇ럼ㄴ;아러;ㅁ얼미얼;ㅁ
      </S.Message>
      <S.SendTime>오후 10:30</S.SendTime>
    </S.MessageWrapper>
  );
};

export default OtherMessage;
