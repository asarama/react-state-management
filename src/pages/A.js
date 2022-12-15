
import React from 'react';

import WeatherCard from 'components/WeatherCard';
import WeatherCardClone from 'components/WeatherCardClone';

import {GeolocationInputProvider} from 'context/input';

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
      <GeolocationInputProvider>
        <WeatherCard></WeatherCard>
        <WeatherCardClone></WeatherCardClone>
      </GeolocationInputProvider>
    </div>
  );
};
  
export default A;