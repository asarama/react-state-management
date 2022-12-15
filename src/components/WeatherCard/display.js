import React, { useState, useEffect } from 'react';

import { RoundContainer } from 'components/WeatherCard/Elements'

import { weatherService } from 'services/http/openmeteo'

const WeatherCardDisplay = () => {

    const [queriedTemperature, setTemperature] = useState('No data')
    const [queriedWindspeed, setWindspeed] = useState('No data')

    useEffect(() => {

        const weatherServiceSub = weatherService.getWeatherObs$().subscribe({
            next: data=> {
                setTemperature(data.current_weather.temperature)
                setWindspeed(data.current_weather.windspeed)
            },
            error: error => console.error(error)
        })

        // On unmount unsubscribe
        return () => {
            weatherServiceSub.unsubscribe()
        }
    }, [])

    return (
        <>
            <RoundContainer>
                OG
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