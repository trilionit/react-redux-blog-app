import React, {Component} from 'react';
import ViewPosts from './posts/index.jsx';
import FormComponent from './form/index.jsx';
class Main extends Component{
	
	constructor(){
		super();
		this.state={
			blogPost:this.blogPost
		}
	}


	
		
	
	render(){
		return(
		<div className="main-body">
			<div className="main-container">
			  <ViewPosts />
			  <FormComponent />
			</div>
		</div>
			)
	}
}
export default Main;