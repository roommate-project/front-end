export const convertUTCtoLocalTime = (utcDate: string) => {
  const date = new Date(utcDate);
  const today = new Date();

  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth()
  ) {
    return `${date.getHours()}:${date.getMinutes()}`;
  }
  return date.toLocaleDateString();
};
