import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'

// Components
import AppContainer from './views/AppContainer'
import * as serviceWorker from './serviceWorker'

// Resources
import './index.css'

// Redux store
import configureStore from './state/store'

const reduxStore = configureStore(window.REDUX_INITIAL_DATA)

ReactDOM.render(
    <ReduxProvider store={reduxStore}>
        <AppContainer />
    </ReduxProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
