import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { DEFAULT_GEOLOCATION } from 'components/WeatherCard/constants'

import { RoundContainer } from 'components/WeatherCard/Elements'

import { weatherService } from 'services/http/openmeteo'
import { Coordinates } from './WeatherStore';

const WeatherCardInputs = () => {
    
    const coordinates = new Coordinates()


    const [inputLatitude, setLatitude] = useState(DEFAULT_GEOLOCATION.latitude)
    const [inputLongitude, setLongitude] = useState(DEFAULT_GEOLOCATION.longitude)

    const latitudeChangeHandler = (event) => {
      coordinates.setLatitude = event.target.value;
    };

    const longitudeChangeHandler = (event) => {
      coordinates.setLongitude = event.target.value;
    };

    const submitHandler = (event) => {

        event.preventDefault();

        console.group("WeatherCard Submit Input")
        console.log(coordinates.coordinates)
        // console.log(`inputLatitude: ${inputLatitude}`)
        // console.log(`inputLongitude: ${inputLongitude}`)
        console.groupEnd("WeatherCard Submit Input")

        weatherService.updateWeatherObs(coordinates.latitude, coordinates.longitude)
    }

    return (
        <>
            <RoundContainer>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder={DEFAULT_GEOLOCATION.latitude}
                            value={coordinates.latitude}
                            onChange={latitudeChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder={DEFAULT_GEOLOCATION.longitude}
                            value={coordinates.longitude}
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