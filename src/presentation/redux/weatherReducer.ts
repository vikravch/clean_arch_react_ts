import {Action} from "./Action";
import {WeatherState} from "./types";
import {GET_WEATHER_FAILURE, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS} from "./actions";

const initialState: WeatherState = {
    weather: null,
    isLoading: false,
    error: null,
}
export const weatherReducer = (state: WeatherState = initialState, action: Action): WeatherState => {
    switch (action.type) {
        case GET_WEATHER_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_WEATHER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                weather: action.payload,
            };
        }
        case GET_WEATHER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}