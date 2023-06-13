import { useState } from 'react';
import * as S from './style';

type TimeProps = {
  onChange: (time: string, isAM: boolean) => void;
  amTime: string;
  pmTime: string;
};

const Time = ({ onChange, amTime, pmTime }: TimeProps) => {
  const times = ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00'];
  const [selectAMTime, setSelectAMTime] = useState('');
  const [selectPMTime, setSelectPMTime] = useState('');

  const handleSelectAM = (time: string) => {
    setSelectAMTime(time);
    setSelectPMTime('');
    onChange(time, true); // true: 오전
  };

  const handleSelectPM = (time: string) => {
    setSelectPMTime(time);
    setSelectAMTime('');
    onChange(time, false); // false: 오후
  };

  return (
    <div>
      <S.Wrapper>
        <S.Subject>오전</S.Subject>
        <S.TimesWrapper>
          {times.map((time, idx) => (
            <S.Time
              key={idx}
              onClick={() => handleSelectAM(time)}
              isSelected={time === selectAMTime}
              isCurrent={time === amTime} // 현재 선택된 오전 시간
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
              onClick={() => handleSelectPM(time)}
              isSelected={time === selectPMTime}
              isCurrent={time === pmTime} // 현재 선택된 오후 시간
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
