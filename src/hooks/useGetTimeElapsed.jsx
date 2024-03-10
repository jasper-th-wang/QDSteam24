import { useContext, useEffect, useState } from 'react';
import TotalTimeContext from '../store/TotalTimeContext';

export default function useGetTimeElapsed() {
  const { goalTime, timeElapsed } = useContext(TotalTimeContext);
  const [progress, setProgress] = useState(0);
  const [timeRemain, setTimeRemain] = useState(0);

  useEffect(() => {
    const newProgress = (1 - timeElapsed / goalTime) * 100;
    const newTimeRemain = goalTime - timeElapsed;
    console.log('goal: ' + goalTime);
    console.log(timeElapsed);
    setProgress(newProgress);
    setTimeRemain(newTimeRemain);
  }, [goalTime, timeElapsed, progress]);
  return { progress, timeRemain };
}
