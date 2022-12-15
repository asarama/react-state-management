import React,  { useContext, useState } from 'react'
import { DEFAULT_GEOLOCATION } from 'constants'

const GeolocationInputContext = React.createContext()
const GeolocationInputLatUpdateContext = React.createContext()
const GeolocationInputLongUpdateContext = React.createContext()

export const useGeolocationInput = () => {
    return useContext(GeolocationInputContext)
}

export const useGeolocationLatitudeUpdate = () => {
    return useContext(GeolocationInputLatUpdateContext)
}

export const useGeolocationLongitudeUpdate = () => {
    return useContext(GeolocationInputLongUpdateContext)
}

export const GeolocationInputProvider = ({ children }) => {
    const [geolocationInputs, setGeolocationInputs] = useState(DEFAULT_GEOLOCATION)

    const updateLatitude = (latitude) => {
        setGeolocationInputs({
            latitude,
            longitude: geolocationInputs.longitude
        })
    }

    const updateLongitude = (longitude) => {
        setGeolocationInputs({
            longitude,
            latitude: geolocationInputs.latitude
        })
    }

    return (
        <GeolocationInputContext.Provider value={geolocationInputs}>
            <GeolocationInputLatUpdateContext.Provider value={updateLatitude}>
                <GeolocationInputLongUpdateContext.Provider value={updateLongitude}>
                    {children}
                </GeolocationInputLongUpdateContext.Provider>
            </GeolocationInputLatUpdateContext.Provider>
        </GeolocationInputContext.Provider>
    )

}