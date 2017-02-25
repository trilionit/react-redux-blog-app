import React, {Component} from 'react';
import ViewPosts from './posts/index.jsx';
import FormComponent from './form/index.jsx';
class Main extends Component{
	constructor(){
		super();
		this.state={
			title:"Initial Title",
			story:"Initial Story"
		}
	}	
receivePost(blogPost){
	this.setState({blogPost})
}
//console.log(this.state.viewPost);

	render(){
		
		return(
		<div className="main-body">
			<div className="main-container">
			  <ViewPosts title={this.state.title} />
			  <FormComponent receivePost={this.receivePost.bind(this)} />
			</div>
		</div>
			)
	}
}
export default Main;