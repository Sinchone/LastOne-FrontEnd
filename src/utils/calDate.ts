const isToday = (chatDate: Date, currentDate: Date) => {
  return (
    chatDate.getDate() === currentDate.getDate() &&
    chatDate.getMonth() === currentDate.getMonth() &&
    chatDate.getFullYear() === currentDate.getFullYear()
  );
};

export const calDate = (input: string) => {
  const chatDate = new Date(input);
  const currentDate = new Date();
  if (isToday(chatDate, currentDate)) {
    const hour = Number(chatDate.getHours());
    const hourInfo = hour < 12 ? `오전 ${hour}` : `오후 ${hour - 12}`;
    return `${hourInfo}:${chatDate.getMinutes().toString().padStart(2, '0')}`;
  }
  return `${chatDate.getFullYear()}-${(chatDate.getMonth() + 1).toString().padStart(2, '0')}-${chatDate
    .getDate()
    .toString()
    .padStart(2, '0')}`;
};

export const calDateForMessage = (input: string) => {
  const matchedStr = input.match(/(\d{2}):(\d{2}):(\d{2})/);
  if (!matchedStr) {
    return;
  }
  const [_, hour, minute] = matchedStr;
  const numericHour = parseInt(hour, 10);
  const period = numericHour >= 12 ? '오후' : '오전';
  const convertedHour = numericHour > 12 ? numericHour - 12 : numericHour;

  return `${period} ${convertedHour}:${minute}`;
};

export const calHour = (hour: number) => {
  if (hour < 12) {
    return {
      meridiem: '오전',
      time: hour,
    };
  }
  return {
    meridiem: '오후',
    time: hour - 12,
  };
};
