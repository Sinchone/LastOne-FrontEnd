import { useEffect, useState } from 'react';
import { ProfileType, FitnessType, GymInfoType, MyPageField } from '@typing/user';

const useProfileForm = (initialState: MyPageField) => {
  const { member, gyms, sbd } = initialState;
  const [profileState, setProfileState] = useState<Partial<ProfileType>>({
    ...member,
  });
  const [gymState, setGymsState] = useState<GymInfoType[]>([...gyms]);
  const [fitness, setFitness] = useState<FitnessType>({
    ...sbd,
  });
  const [time, setTime] = useState({
    hour: member.workoutTime?.slice(0, 2),
    minute: member.workoutTime?.slice(3, 2),
  });

  const [days, setDays] = useState<{ [key: string]: boolean }>({
    월: false,
    화: false,
    수: false,
    목: false,
    금: false,
    토: false,
    일: false,
  });

  const handleProfileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileState({
      ...profileState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectGender = (gender: string) => () => {
    setProfileState({
      ...profileState,
      gender,
    });
  };

  const handleSelectWorkOutDay = (day: string) => () => {
    setDays({
      ...days,
      [day]: !days[day],
    });
  };

  const handleChangeFitnessInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFitness({
      ...fitness,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime({
      ...time,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (time.hour && time.minute) {
      setProfileState({
        ...profileState,
        workoutTime: `${time.hour}:${time.minute}`,
      });
    }
  }, [time]);

  useEffect(() => {
    setProfileState({
      ...profileState,
      workoutDay: Object.keys(days).filter((day) => {
        if (days[day] !== false) {
          return day;
        }
      }),
    });
  }, [days]);

  console.log(profileState, gymState);

  return {
    profileState,
    gymState,
    fitness,
    time,
    days,
    handleChangeFitnessInput,
    handleProfileInputChange,
    handleSelectGender,
    handleSelectWorkOutDay,
    handleChangeTimeInput,
  };
};

export default useProfileForm;
