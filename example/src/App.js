import React from 'react';

import Countdown from 'react-houston';
import 'react-houston/dist/css/houston.css';

const App = () => {
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1>Countdown</h1>
      <Countdown endDate={tomorrow} />
    </div>
  );
};

export default App;
