import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { RoundContainer } from 'components/WeatherCard/Elements'

import { weatherService } from 'services/http/openmeteo'

import { 
    useGeolocationInput, 
    useGeolocationLatitudeUpdate, 
    useGeolocationLongitudeUpdate 
} from 'context/input'

const WeatherCardInputs = () => {

    const geolocationInputs = useGeolocationInput()
    const updateLatitude = useGeolocationLatitudeUpdate()
    const updateLongitude = useGeolocationLongitudeUpdate()

    const latitudeChangeHandler = (event) => {
        updateLatitude(event.target.value)
    };

    const longitudeChangeHandler = (event) => {
        updateLongitude(event.target.value)
    };

    const submitHandler = (event) => {

        event.preventDefault();

        console.group("WeatherCard Submit Input")
        console.log(`inputLatitude: ${geolocationInputs.latitude}`)
        console.log(`inputLongitude: ${geolocationInputs.longitude}`)
        console.groupEnd("WeatherCard Submit Input")

        weatherService.updateWeatherObs(geolocationInputs.latitude, geolocationInputs.longitude)
    }

    return (
        <>
            <RoundContainer>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                            type="number"
                            value={geolocationInputs.latitude}
                            onChange={latitudeChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control
                            type="number"
                            value={geolocationInputs.longitude}
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