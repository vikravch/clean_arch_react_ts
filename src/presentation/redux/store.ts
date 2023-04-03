import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import weatherReducer from './weatherReducer'

const store = createStore(
  combineReducers(
    {
      weather: weatherReducer
    }
  ),
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
)

export default store
