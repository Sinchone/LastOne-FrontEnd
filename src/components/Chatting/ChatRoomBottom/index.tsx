import * as S from './style';
import ChatSendButton from '@assets/icon/chatting-send.svg';

const ChatRoomBottom = () => {
  return (
    <S.BottomWrapper>
      <S.Input placeholder="메세지를 입력하세요." />
      <S.SendButton>
        <ChatSendButton />
      </S.SendButton>
    </S.BottomWrapper>
  );
};

export default ChatRoomBottom;
