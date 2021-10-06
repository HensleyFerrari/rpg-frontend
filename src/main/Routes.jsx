import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Sistema from '../components/sistema/Sistema'
import Char from '../components/char/Char'
import Shop from '../components/shop/Shop'
import Personal from '../components/char/personal/Personal'

// eslint-disable-next-line
export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/sistema' component={Sistema} />
        <Route exact path='/char' component={Char} />
        <Route path='/char/:charId' component={Personal} />
        <Route path='/shop' component={Shop} />
        <Redirect from='*' to='/' />
    </Switch>