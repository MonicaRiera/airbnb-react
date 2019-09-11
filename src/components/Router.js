import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Bookings from './Bookings'
import Confirm from './Confirm'
import Create from './Create'
import Favorites from './Favorites'
import Host from './Host'
import Login from './Login'
import Place from './Place'
import Places from './Places'
import Profile from './Profile'
import Signup from './Signup'

class Router extends React.Component {
	render () {
		return (
		<BrowserRouter>
      <Switch>
				<Route path='/favorites' component={Favorites} />
        <Route path='/bookings' component={Bookings} />
        <Route path='/profile' component={Profile} />
				<Route path='/confirm' component={Confirm} />
				<Route path='/signup' component={Signup} />
				<Route path='/places' component={Places} />
				<Route path='/create' component={Create} />
				<Route path='/place' component={Place} />
				<Route path='/host' component={Host} />
        <Route path='/' component={Login} />
      </Switch>
    </BrowserRouter>
		)
	}
}

export default Router;
