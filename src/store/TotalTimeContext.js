import React from 'react';

const TotalTimeContext = React.createContext({
  goalTime: 0,
  timeElapsed: 0,
  setGoalTime: () => {},
  setTimeElapsed: () => {},
});

export default TotalTimeContext;
