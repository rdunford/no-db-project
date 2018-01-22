import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/home/Home';
import Mainpage from './components/mainpage/Mainpage';
import Favorites from './components/favorites/Favorites';
// import About from './components/about/About';
// import Blog from './components/blog/Blog';
import Recipes from './components/addrecipe/AddRecipe';


export default(

    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={Mainpage} path='/recipes'/>
        <Route component={Favorites} path='/favorites'/>
        <Route component={Recipes} path='/addrecipe'/>
    </Switch>


)