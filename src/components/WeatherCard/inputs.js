import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { RoundContainer } from 'components/WeatherCard/Elements'

import { weatherService } from 'services/http/openmeteo'

import { LatitudeInputContext, LongitudeInputContext } from 'components/context'

const WeatherCardInputs = () => {

    const [inputLatitude, setLatitude] = useState()
    const [inputLongitude, setLongitude] = useState()

    const latitudeChangeHandler = (event) => {
        setLatitude(event.target.value);
    };

    const longitudeChangeHandler = (event) => {
        setLongitude(event.target.value);
    };

    const submitHandler = (event) => {

        event.preventDefault();

        console.group("WeatherCard Submit Input")
        console.log(`inputLatitude: ${inputLatitude}`)
        console.log(`inputLongitude: ${inputLongitude}`)
        console.groupEnd("WeatherCard Submit Input")

        weatherService.updateWeatherObs(inputLatitude, inputLongitude)
    }

    return (
        <>
            <RoundContainer>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Latitude</Form.Label>
                        <LatitudeInputContext.Provider value={inputLatitude}>
                            <Form.Control
                                type="number"
                                // placeholder={DEFAULT_GEOLOCATION.latitude}
                                value={inputLatitude}
                                onChange={latitudeChangeHandler}
                            />
                        </LatitudeInputContext.Provider>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Longitude</Form.Label>
                        <LongitudeInputContext.Provider value={inputLongitude}>
                            <Form.Control
                                type="number"
                                // placeholder={DEFAULT_GEOLOCATION.longitude}
                                value={inputLongitude}
                                onChange={longitudeChangeHandler}
                            />
                        </LongitudeInputContext.Provider>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </RoundContainer>
        </>
    );
};

export default WeatherCardInputs;