import { useEffect, useState } from 'react';
import { ProfileType, FitnessType, GymInfoType, MyPageField } from '@typing/user';

const useProfileForm = (initialState: MyPageField) => {
  const { member, gyms, sbd } = initialState;
  const [profileState, setProfileState] = useState<Partial<ProfileType>>({
    ...member,
    nickname: member.isEdited ? member.nickname : '',
  });
  const [gymState, setGymsState] = useState<GymInfoType[]>([...gyms]);
  const [fitness, setFitness] = useState<FitnessType>({
    ...sbd,
  });
  const [time, setTime] = useState({
    hour: member.workoutTime?.slice(0, 2),
    minute: member.workoutTime?.slice(3, 5),
  });

  const [days, setDays] = useState<{ [key: string]: boolean }>({
    월: member.workoutDay.includes('월'),
    화: member.workoutDay.includes('화'),
    수: member.workoutDay.includes('수'),
    목: member.workoutDay.includes('목'),
    금: member.workoutDay.includes('금'),
    토: member.workoutDay.includes('토'),
    일: member.workoutDay.includes('일'),
  });

  const handleProfileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    let maxLength;

    if (name === 'nickname') maxLength = 15;
    else if (name === 'workoutPurpose') maxLength = 20;

    setProfileState({
      ...profileState,
      [name]: e.target.value.substring(0, maxLength),
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

  const setChangeGymState = (place: any) => {
    if (gymState.length >= 2) return;

    setGymsState([
      ...gymState,
      {
        ...place,
      },
    ]);
  };

  const handleRemoveGym = (name: string) => {
    setGymsState(gymState.filter((gym) => gym.latitude !== name));
  };

  const setProfileImage = (imageUrl: string) => {
    setProfileState({
      ...profileState,
      profileUrl: imageUrl,
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
    handleRemoveGym,
    setChangeGymState,
    setProfileImage,
  };
};

export default useProfileForm;
