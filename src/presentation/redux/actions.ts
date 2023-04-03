import { type Dispatch } from 'react'
import GetWeather from '../../domain/use_case/GetWeather'
import type Weather from '../../domain/model/weather'

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST'
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE'

export const getWeather = (city: string): any => async (dispatch: Dispatch<any>) => {
  dispatch(getWeatherRequest())
  try {
    const getWeather: Weather = await GetWeather(city)
    dispatch(getWeatherSuccess(getWeather))
  } catch (e) {
    dispatch(getWeatherFailure((e as Error).message))
  }
}

const getWeatherRequest = () => ({
  type: GET_WEATHER_REQUEST
})
const getWeatherSuccess = (weather: Weather) => ({
  type: GET_WEATHER_SUCCESS,
  payload: weather
})
const getWeatherFailure = (error: string) => ({
  type: GET_WEATHER_FAILURE,
  payload: error
})
