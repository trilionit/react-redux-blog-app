import React, {Component} from 'react';
import Header from './components/header/header.jsx'
import Main from './components/main/index.jsx'
require('./css/style.css')



class App extends Component{
	render(){
		return(
			<div>
				<Header />
				<Main />
			</div>
			)
			}	
}
export default App;
