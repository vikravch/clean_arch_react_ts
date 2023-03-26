import React, {useEffect} from 'react';
import logo from '../logo.svg';
import './App.css';
import getWeather from "../domain/use_case/GetWeather";

function App() {

  const [weather, setWeather] = React.useState({});

  useEffect(() => {
    getWeather('Haifa').then((weather) => {
      console.log(weather);
      setWeather(weather);
    });
  }, []);

  return (
      <div className="App">
        <h4>{
          JSON.stringify(weather)
        }</h4>
      </div>
  );
}

export default App;
