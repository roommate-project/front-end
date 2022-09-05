import { TimerContainer } from 'components/authTimer/AuthTimerStyles';
import { useEffect, useRef, useState } from 'react';

function AuthTimer() {
  const [min, setMin] = useState(9);
  const [sec, setSec] = useState(59);
  const time = useRef<number>(599);
  const timerId: { current: NodeJS.Timer | null } = useRef(null);
  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(Math.floor(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);
    return () => clearInterval(timerId.current as NodeJS.Timeout);
  }, []);
  useEffect(() => {
    if (time.current < 0) {
      alert(
        '인증 유효시간이 만료되었습니다. 인증번호 재전송 후 재시도해주세요.'
      );
      clearInterval(timerId.current as NodeJS.Timeout);
    }
  }, [sec]);
  return (
    <TimerContainer>
      {min}분 {sec}초
    </TimerContainer>
  );
}

export default AuthTimer;
