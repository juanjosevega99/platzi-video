import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
// --- import data  from '../data/api.json'
import extras   from '../data/api-extra.json'
import '../css/style.css'

// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/index'
import data from '../schemas/index.js'
import { Map as map} from 'immutable' // --- se le coloca un alias en minusculas para verlo como funcion no como clase

// Middlewares
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(
  reducer,
  map(), // --- se va a definir el estado inicial de cada reducer en su propio archivo js
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // --- requiere la extensión/plugin instalada en el navegador!
)

const homeContainer = document.getElementById('home-container')

//ReactDOM.render(que voy a renderizar, donde lo haré)
//    el elemento que se va a renderizar podría ser o un bloque de codigo JSX o un componente de React
ReactDOM.render(
  <Provider store = {store} >
    <Home />
  </Provider>
, homeContainer)