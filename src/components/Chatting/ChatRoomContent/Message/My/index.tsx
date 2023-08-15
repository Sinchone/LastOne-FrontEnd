import * as S from './style';
import { MessageType } from '@typing/chatting';
import { calDateForMessage } from '@utils/calDate';

interface Props {
    message: MessageType;
}

const MyMessage = ({ message }: Props) => {
    return (
        <S.MessageWrapper>
            <S.SendTime>{calDateForMessage(message.sendTime)}</S.SendTime>
            <S.Message>{message.content}</S.Message>
        </S.MessageWrapper>
    )
}

export default MyMessage