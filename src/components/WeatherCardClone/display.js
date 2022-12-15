import React, { useState, useEffect } from 'react';

import { RoundContainer } from 'components/WeatherCardClone/Elements'

import { useWeatherState } from "../WeatherCard/weather_state"

const WeatherCardDisplay = () => {

    const weather_state = useWeatherState()

    if (weather_state.promised) {
        return <p>Loading ...</p>;
    }
    
    if (weather_state.error) {
        return <p>Failed to load <br />
            <code style={{ color: 'red' }}>{weather_state.error.toString()}</code><br />
        </p>
    }
    return (
        <>
            <RoundContainer>
                Clone
                <div>
                    Temperature: {weather_state.temperature.get()}
                </div>
                <div>
                    Windspeed: {weather_state.windspeed.get()}
                </div>
            </RoundContainer>
        </>
    );
};

export default WeatherCardDisplay;