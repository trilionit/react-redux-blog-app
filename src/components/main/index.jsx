import React, {Component} from 'react';
import ViewPosts from './posts/index.jsx';
import FormComponent from './form/index.jsx';
class Main extends Component{
	
$.get("/", function(data){
	constructor(){
		super();
		this.state={
			blogPost:data
		}
	}
})
		
		
receivePost(blogPost){
	this.setState({blogPost})
}
//console.log(this.state.viewPost);

	render(){
		
		return(
		<div className="main-body">
			<div className="main-container">
			  <ViewPosts blogPost={this.state.blogPost} />
			  <FormComponent receivePost={this.receivePost.bind(this)} />
			</div>
		</div>
			)
	}
}
export default Main;