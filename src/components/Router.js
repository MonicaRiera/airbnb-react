import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
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

	checkAuth = () => {
		return localStorage.getItem('token') ? true : false
	}

	render () {
		return (
		<BrowserRouter>
      <Switch>
				<Route path='/favorites' render={() => this.checkAuth() ? <Favorites/> : <Redirect to="/login"/>} />

        <Route path='/bookings' render={() => this.checkAuth() ? <Bookings/> : <Redirect to="/"/>} />

        <Route path='/profile' render={() => this.checkAuth() ? <Profile/> : <Redirect to="/"/>}/>

				<Route path='/confirm' render={() => this.checkAuth() ? <Confirm/> : <Redirect to="/"/>} />

				<Route path='/signup' component={Signup} />

				<Route path='/places' render={() => this.checkAuth() ? <Places/> : <Redirect to="/"/>} />

				<Route path='/create' render={() => this.checkAuth() ? <Create/> : <Redirect to="/"/>} />

				<Route path='/place/:id' render={() => this.checkAuth() ? <Place/> : <Redirect to="/"/>}/>

				<Route path='/host' render={() => this.checkAuth() ? <Host/> : <Redirect to="/"/>} />

        <Route path='/' component={Login} />
      </Switch>
    </BrowserRouter>
		)
	}
}

export default Router;
