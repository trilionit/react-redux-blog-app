import React, {Component} from 'react';
import ViewPosts from './posts/index.jsx';
import FormComponent from './form/index.jsx';
class Main extends Component{
	
constructor(){
	super();
	
	this.state={
		blogData:[]
	}
		
}
componentDidMount() {
	$.get("/posts", function(blogData) {
		this.setState({blogData})
		
	}.bind(this));
}
receivePost(blogPost){
	let newArr = this.state.blogData.concat([blogPost])
	this.setState({blogData:newArr})
}
//console.log(this.state.viewPost);

	render(){
	//console.log(this.state.blogPost);	
		return(
		<div className="main-body">
			<div className="main-container">
			  <ViewPosts blogData={this.state.blogData} />
			  <FormComponent receivePost={this.receivePost.bind(this)} />
			</div>
		</div>
			)
	}
}
export default Main;