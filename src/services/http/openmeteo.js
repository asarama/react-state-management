import { BehaviorSubject } from 'rxjs';

const getWeather = async (longitude, latitude) => {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    return await response.json()
}

const getWeatherSubject = new BehaviorSubject({
        current_weather: {
            temperature: "No data",
            windspeed: "No data"
        }
    })

export const weatherService = {
    updateWeatherObs: async (longitude, latitude) => {
        getWeatherSubject.next(await getWeather(longitude, latitude))
    },
    getWeatherObs$: () => {
        return getWeatherSubject.asObservable()
    }
}