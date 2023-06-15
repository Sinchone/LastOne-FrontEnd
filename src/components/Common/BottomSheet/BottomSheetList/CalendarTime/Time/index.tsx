import * as S from './style';
import { TimeType } from '@typing/post';
import { times } from '@constants/post';

type TimeProps = {
  onChange: ({ meridiem, time }: TimeType) => void;
  currentTime: TimeType;
};

const Time = ({ onChange, currentTime }: TimeProps) => {
  return (
    <div>
      <S.Wrapper>
        <S.Subject>오전</S.Subject>
        <S.TimesWrapper>
          {times.map((time, idx) => (
            <S.Time
              key={idx}
              onClick={() => {
                onChange({ meridiem: '오전', time });
              }}
              isSelected={time === (currentTime.meridiem === '오전' && currentTime.time)}
            >
              {time}
            </S.Time>
          ))}
        </S.TimesWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <S.Subject>오후</S.Subject>
        <S.TimesWrapper>
          {times.map((time, idx) => (
            <S.Time
              key={idx}
              onClick={() => {
                onChange({ meridiem: '오후', time });
              }}
              isSelected={time === (currentTime.meridiem === '오후' && currentTime.time)}
            >
              {time}
            </S.Time>
          ))}
        </S.TimesWrapper>
      </S.Wrapper>
    </div>
  );
};

export default Time;
