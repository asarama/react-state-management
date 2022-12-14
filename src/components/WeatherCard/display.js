import React, { useState } from 'react';

import { RoundContainer } from 'components/WeatherCard/Elements'

const WeatherCardDisplay = () => {

    const [queriedTemperature, setTemperature] = useState('No data')
    const [queriedWindspeed, setWindspeed] = useState('No data')

    return (
        <>
            <RoundContainer>
                <div>
                    Temperature: {queriedTemperature}
                </div>
                <div>
                    Windspeed: {queriedWindspeed}
                </div>
            </RoundContainer>
        </>
    );
};

export default WeatherCardDisplay;