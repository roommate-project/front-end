import { TimerContainer } from 'components/authTimer/AuthTimerStyles';
import { useEffect, useRef, useState } from 'react';

interface ITimerProps {
  isResend: boolean;
  setIsResend: React.Dispatch<React.SetStateAction<boolean>>;
}

function AuthTimer({ isResend, setIsResend }: ITimerProps) {
  const [min, setMin] = useState(9);
  const [sec, setSec] = useState(59);
  const time = useRef<number>(599);
  const timerRef: { current: NodeJS.Timer | null } = useRef(null);

  useEffect(() => {
    time.current = 599;
    timerRef.current = setInterval(() => {
      setMin(Math.floor(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);
    setIsResend(false);
    return () => clearInterval(timerRef.current as NodeJS.Timeout);
  }, [isResend]);

  useEffect(() => {
    if (time.current < 0) {
      alert(
        '인증 유효시간이 만료되었습니다. 인증번호 재전송 후 재시도해주세요.'
      );
      clearInterval(timerRef.current as NodeJS.Timeout);
    }
  }, [sec]);

  return (
    <TimerContainer>
      {min}분 {sec}초
    </TimerContainer>
  );
}

export default AuthTimer;
