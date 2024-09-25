import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(()=>{
    console.log('Timeout called');
    const timer=setTimeout(onTimeout, timeout);

    return ()=>{
      clearTimeout(timer);
    }
  }, [onTimeout, timeout]);
  
  useEffect(()=>{
    console.log('Interval called');
    const interval=setInterval(() => setRemainingTime(prevTime => prevTime - 100), 100);

    return ()=>{
      clearInterval(interval);
    }
  }, []);
  
  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
