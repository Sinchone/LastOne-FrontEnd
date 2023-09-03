import * as S from './style';
import { TimeType } from '@typing/post';
import { times } from '@constants/post';
import { calHour } from '@utils/calDate';

type TimeProps = {
  onChange: ({ meridiem, time }: TimeType) => void;
  currentTime: TimeType;
};

const Time = ({ onChange, currentTime }: TimeProps) => {
  const now = calHour(new Date().getHours());

  const checkIsPast = ({ meridiem, time }: TimeType) => {
    const hour = +time.split(':')[0];

    if (meridiem === '오전') {
      if (now.meridiem === '오후' || (hour === 12 ? 0 : hour) <= now.time) return true;
      return false;
    }

    if (now.meridiem === '오후' && (hour === 12 ? 0 : hour) <= now.time) return true;
    return false;
  };

  return (
    <div>
      <S.Wrapper>
        <S.Subject>오전</S.Subject>
        <S.TimesWrapper>
          {times.map((time, idx) => (
            <S.Time
              key={idx}
              onClick={() => {
                !checkIsPast({ meridiem: '오전', time }) && onChange({ meridiem: '오전', time });
              }}
              isSelected={time === (currentTime.meridiem === '오전' && currentTime.time)}
              isDisabled={checkIsPast({ meridiem: '오전', time })}
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
                !checkIsPast({ meridiem: '오후', time }) && onChange({ meridiem: '오후', time });
              }}
              isSelected={time === (currentTime.meridiem === '오후' && currentTime.time)}
              isDisabled={checkIsPast({ meridiem: '오후', time })}
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
