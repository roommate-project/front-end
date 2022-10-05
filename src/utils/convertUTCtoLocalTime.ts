export const convertUTCtoLocalTime = (utcDate: string) => {
  const date = new Date(utcDate);

  return `${date.getHours()}:${date.getMinutes()}`;
};

export const convertUTCtoLocalDate = (utcDate: string) => {
  const date = new Date(utcDate);

  const dateString = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return `${dateString}`;
};
