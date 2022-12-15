import { hookstate, useHookstate } from '@hookstate/core';
import { getWeather } from "../../services/http/openmeteo"
import { DEFAULT_GEOLOCATION } from './constants';

const format_reponse = (data) => {
    console.log(data)
    return {
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed
    }
}
export const weather_state = hookstate(async() => {
    // Emulate asynchronous loading of the initial state data.
    // The real application would run some fetch request,
    // to get the initial data from a server.
    const weather = await getWeather(DEFAULT_GEOLOCATION.longitude, DEFAULT_GEOLOCATION.latitude)
    return format_reponse(weather)
})

export function useWeatherState() {
    // This function exposes the state directly.
    // i.e. the state is accessible directly outside of this module.
    // The state for settings in SettingsState.ts wraps the state by an interface.
    // Both options are valid and you need to use one or another,
    // depending on your circumstances. Apply your engineering judgement
    // to choose the best option. If unsure, exposing the state directly
    // like it is done below is a safe bet.        
    return useHookstate(weather_state)
}

// for example purposes, let's update the state outside of a React component
// setTimeout(() => state[state.length].set({
//     id: '100',
//     name: 'Spread few words about Hookstate',
//     done: false
// }), 10000)

export const weatherService = {
    updateWeatherObs: async (longitude, latitude) => {
        weather_state.set(format_reponse(await getWeather(longitude, latitude)))
    },
}
