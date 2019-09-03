import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './components/Router'
import './styles/global.css'
import './styles/grid.css'
import './styles/nav.css'
import './styles/users.css'
import './styles/icons.css'
import './styles/cards.css'
import './styles/gallery.css'
import './styles/reviews.css'
import './styles/sidebar.css'
import './styles/buttons.css'
import './styles/forms.css'
import './styles/filters.css'

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
