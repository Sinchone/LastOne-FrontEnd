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
