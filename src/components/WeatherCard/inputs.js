import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { DEFAULT_GEOLOCATION } from 'components/WeatherCard/constants'

import { RoundContainer } from 'components/WeatherCard/Elements'

import { useWeatherState, weatherService } from './weather_state';
import { useWeatherInputState } from './weather_input_state'
const WeatherCardInputs = () => {

    const weather_state = useWeatherState()
    const weather_input_state = useWeatherInputState()
    // const [inputLatitude, setLatitude] = useState(DEFAULT_GEOLOCATION.latitude)
    // const [inputLongitude, setLongitude] = useState(DEFAULT_GEOLOCATION.longitude)

    const latitudeChangeHandler = (event) => {
        weather_input_state.latitude.set(event.target.value)
    };

    const longitudeChangeHandler = (event) => {
        weather_input_state.longitude.set(event.target.value);
    };

    const submitHandler = (event) => {

        event.preventDefault();

        console.group("WeatherCard Submit Input")
        console.log(`inputLatitude: ${weather_input_state.latitude.get()}`)
        console.log(`inputLongitude: ${weather_input_state.longitude.get()}`)
        console.groupEnd("WeatherCard Submit Input")
        weatherService.updateWeatherObs(weather_input_state.latitude.get(), weather_input_state.longitude.get())
    }

    return (
        <>
            <RoundContainer>
                <Form onSubmit={submitHandler}>
                    <p> ERRORS {JSON.stringify(weather_input_state.errors())} </p>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder={DEFAULT_GEOLOCATION.latitude}
                            value={weather_input_state.latitude.get()}
                            onChange={latitudeChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder={DEFAULT_GEOLOCATION.longitude}
                            value={weather_input_state.longitude.get()}
                            onChange={longitudeChangeHandler}
                        />
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