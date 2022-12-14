
import React from 'react';

import WeatherCard from 'components/WeatherCard';
  
const A = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '90vh'
      }}
    >
      <WeatherCard></WeatherCard>
      <WeatherCard></WeatherCard>
    </div>
  );
};
  
export default A;