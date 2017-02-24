import {combineReducers} from 'redux';
import BlogPosts from './blogPosts.jsx';

const allReducers =combineReducers({
	posts: BlogPosts
});

export default allReducers;