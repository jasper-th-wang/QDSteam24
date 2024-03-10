import React from 'react';

const TotalTimeContext = React.createContext({
  goalTime: 0,
  setGoalTime: () => {},
});

export default TotalTimeContext;
