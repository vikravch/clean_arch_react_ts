import Weather from "../../domain/model/weather";
export interface Store{
    weather: WeatherState
}
export interface WeatherState {
    weather: Weather | null;
    isLoading: boolean;
    error: string | null;
}