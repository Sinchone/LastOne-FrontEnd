import * as S from './style';

interface Props {
  sendTime: string;
}

const DateLine = ({ sendTime }: Props) => {
  const month = parseInt(sendTime.slice(5, 7), 10);
  const day = parseInt(sendTime.slice(8, 10), 10);

  return (
    <S.DateSepatator>
      <span>
        {month}월 {day}일
      </span>
    </S.DateSepatator>
  );
};

export default DateLine;
