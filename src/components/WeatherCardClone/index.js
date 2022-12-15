import React from 'react';

import WeatherCardDisplay from 'components/WeatherCardClone/display';
import WeatherCardInputs from 'components/WeatherCardClone/inputs';
import { RoundContainer } from 'components/WeatherCardClone/Elements'

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