export const convertUTCtoLocalTime = (utcDate: string) => {
  const date = new Date(utcDate);

  const timeString = date.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: 'numeric',
  });
  return `${timeString}`;
};

export const convertUTCtoLocalDate = (utcDate: string) => {
  const date = new Date(utcDate);

  const dateString = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  return `${dateString}`;
};
