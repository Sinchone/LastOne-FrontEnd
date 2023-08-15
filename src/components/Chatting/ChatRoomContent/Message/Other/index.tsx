import * as S from './style';
import Image from 'next/image';
import { createImageUrl } from '@utils/createImageUrl';
import ProfileIcon from '@assets/icon/profile.svg';
import { useRouter } from 'next/router';
import { MessageType } from '@typing/chatting';
import { calDateForMessage } from '@utils/calDate';

interface Props {
  profileUrl: string;
  message: MessageType;
}

const OtherMessage = ({ profileUrl, message }: Props) => {
  const router = useRouter();

  return (
    <S.MessageWrapper>
      <S.ProfileButton onClick={() => {router.push(`/mypage/${message.senderId}`);}}>
        <S.ImageWrapper>
          {profileUrl ? (
            <Image src={createImageUrl(profileUrl)} width={500} height={500} alt="profileImg" />
          ) : (
            <ProfileIcon />
          )}
          <ProfileIcon />
        </S.ImageWrapper>
      </S.ProfileButton>
      <S.Message>
        {message.content}
      </S.Message>
      <S.SendTime>{calDateForMessage(message.sendTime)}</S.SendTime>
    </S.MessageWrapper>
  );
};

export default OtherMessage;
