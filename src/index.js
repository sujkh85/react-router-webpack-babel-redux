import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, 
    //hashHistory, 
    browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './redux/store/configureStore';

//import { AppContainer } from 'react-hot-loader';

export const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.querySelector("#root")
);