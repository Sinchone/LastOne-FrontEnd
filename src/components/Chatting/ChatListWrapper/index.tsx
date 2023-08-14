import * as S from './style';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ChatMain = ({ children }: Props) => {
  return <S.ChatMain>{children}</S.ChatMain>;
};

export default ChatMain;
