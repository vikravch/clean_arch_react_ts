import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from './redux/actions'
import type Weather from '../domain/model/weather'
import { type Store } from './redux/types'

function App (): JSX.Element {
  const weather: Weather | null = useSelector<Store, Weather | null>(
    (state: Store) => state.weather.weather
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWeather('Haifa'))
  }, [])

  return (
    <div className="App">
      <h4>
        {
            (weather != null) ? JSON.stringify(weather) : 'Loading...'
        }
      </h4>
    </div>
  )
}

export default App

// 1. npm init @eslint/config
// 2. modify .eslintrc.json
// 3. chande/modify dependencies in package.json (devDependencies)
// 4. npm install sometiomes use --force
// 5. set up auto fix on save in WebStorm
