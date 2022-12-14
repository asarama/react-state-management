
import React from 'react';

import WeatherCard from 'components/WeatherCard';
  
const B = () => {
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
    </div>
  );
};
  
export default B;