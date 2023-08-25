import React from 'react';
import * as S from './style';
import MyMessage from './Message/My';
import OtherMessage from './Message/Other';
import DateLine from './DateLine';
import { ChatRoomType, MessageType } from '@typing/chatting';

interface Props {
  chatRoomData: ChatRoomType;
}

const ChatRoomContent = ({ chatRoomData }: Props) => {
  const { profileUrl, otherUserId } = chatRoomData;
  const messageList: MessageType[] = chatRoomData.messages;

  const renderMessages = () => {
    const elements = [];
    let prevDate: Date | null = null;

    for (const message of messageList) {
      const currentDate = new Date(message.sendTime);

      // 이전 메시지의 날짜와 현재 메시지의 날짜를 비교
      if (!prevDate || prevDate.getDate() !== currentDate.getDate()) {
        elements.push(<DateLine key={message.sendTime} sendTime={message.sendTime} />);
        prevDate = currentDate;
      }

      // 메시지의 senderId와 otherUserId를 비교하여 적절한 메시지 컴포넌트를 선택
      if (message.senderId === otherUserId) {
        elements.push(
          <OtherMessage key={`${message.content}-${message.sendTime}`} profileUrl={profileUrl} message={message} />
        );
      } else {
        elements.push(<MyMessage key={`${message.content}-${message.sendTime}`} message={message} />);
      }
    }

    return elements;
  };

  return <S.Wrapper>{renderMessages()}</S.Wrapper>;
};

export default ChatRoomContent;
