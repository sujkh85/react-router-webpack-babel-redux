import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainAppContainer from './containers/MainAppContainer';
import App from './app';

export default (
    <Route path="/" component={MainAppContainer}>
        <IndexRoute component={App}/>
    </Route>
);
