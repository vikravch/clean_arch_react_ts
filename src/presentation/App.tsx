import React, {useEffect} from 'react';
import logo from '../logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getWeather} from "./redux/actions";
import Weather from "../domain/model/weather";
import {Store} from "./redux/types";

function App() {

  const weather: Weather | null = useSelector<Store, Weather | null>(
      (state: Store) => state.weather.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather('Haifa'));
  }, []);

  return (
      <div className="App">
        <h4>{
            (weather)?JSON.stringify(weather):'Loading...'
        }</h4>
      </div>
  );
}

export default App;
