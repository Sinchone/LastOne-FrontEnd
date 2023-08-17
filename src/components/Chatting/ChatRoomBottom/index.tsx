import * as S from './style';
import ChatSendButton from '@assets/icon/chatting-send.svg';
import { publishMessage } from '@apis/chatting';
import { useState } from 'react';
import { PublishMessageType } from '@typing/chatting';

interface Props {
  roomId: string;
  otherId: number;
  myId: number;
}

const ChatRoomBottom = ({ roomId, otherId, myId }: Props) => {
  const [messageContent, setMessageContent] = useState(''); // 입력된 메시지 상태 관리

  const sendMessage = () => {
    const message: PublishMessageType = {
      roomId: roomId,
      senderId: myId,
      receiverId: otherId,
      content: messageContent,
    };
    publishMessage(roomId, JSON.stringify(message));
    setMessageContent('');
  };

  return (
    <S.BottomWrapper>
      <S.Input
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        placeholder="메세지를 입력하세요."
      />
      <S.SendButton onClick={sendMessage}>
        <ChatSendButton />
      </S.SendButton>
    </S.BottomWrapper>
  );
};

export default ChatRoomBottom;
