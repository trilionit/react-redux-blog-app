import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './app.jsx';
import allReducers from './reducers/index.jsx';

const store = createStore(allReducers);

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, 
	document.getElementById('root')
	);