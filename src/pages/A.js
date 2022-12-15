
import React from 'react';

import WeatherCard from 'components/WeatherCard';
import WeatherCardClone from 'components/WeatherCardClone';
  
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
      <WeatherCardClone></WeatherCardClone>
    </div>
  );
};
  
export default A;