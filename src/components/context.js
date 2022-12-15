import React from 'react';
import { DEFAULT_GEOLOCATION } from 'constants';

export const LatitudeInputContext = React.createContext(DEFAULT_GEOLOCATION.latitude)
export const LongitudeInputContext = React.createContext(DEFAULT_GEOLOCATION.longitude);