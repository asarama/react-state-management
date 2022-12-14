import React from 'react';

import WeatherCardDisplay from 'components/WeatherCard/display';
import WeatherCardInputs from 'components/WeatherCard/inputs';
import { RoundContainer } from 'components/WeatherCard/Elements'

const WeatherCard = () => {
    return (
        <>
            <RoundContainer>
                <WeatherCardDisplay></WeatherCardDisplay>
                <WeatherCardInputs></WeatherCardInputs>
            </RoundContainer>
        </>
    );
};

export default WeatherCard;