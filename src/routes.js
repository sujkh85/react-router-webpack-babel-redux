import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainAppContainer from './containers/MainAppContainer';
import Home from './component/home/home';

export default (
    <Route path="/" component={MainAppContainer}>
        <IndexRoute component={Home}/>
    </Route>
);
