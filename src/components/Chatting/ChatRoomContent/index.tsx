import React from 'react';
import * as S from './style';
import MyMessage from './Message/My';
import OtherMessage from './Message/Other';
import DateLine from './DateLine';


const ChatRoomContent = () => {

    return (
        <S.Wrapper>
            <MyMessage></MyMessage>
            <OtherMessage></OtherMessage>
            <DateLine></DateLine>
        </S.Wrapper>
    )
}

export default ChatRoomContent;