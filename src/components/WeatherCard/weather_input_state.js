import { hookstate, useHookstate } from '@hookstate/core';
import { DEFAULT_GEOLOCATION } from './constants';
const weather_input_state = hookstate(DEFAULT_GEOLOCATION)

export function useWeatherInputState() {
    // This function exposes the state directly.
    // i.e. the state is accessible directly outside of this module.
    // The state for settings in SettingsState.ts wraps the state by an interface.
    // Both options are valid and you need to use one or another,
    // depending on your circumstances. Apply your engineering judgement
    // to choose the best option. If unsure, exposing the state directly
    // like it is done below is a safe bet.        
    return useHookstate(weather_input_state)
}

// for example purposes, let's update the state outside of a React component
// setTimeout(() => state[state.length].set({
//     id: '100',
//     name: 'Spread few words about Hookstate',
//     done: false
// }), 10000)