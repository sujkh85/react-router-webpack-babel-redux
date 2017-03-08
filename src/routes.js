import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainAppContainer from './containers/MainAppContainer';
import Home from './component/home/home';
import Test from './component/test';

export default (
    <Route path="/" component={MainAppContainer}>
        <IndexRoute component={Home}/>
        <Route path='/mimi' component={Test}/>
    </Route>
);
