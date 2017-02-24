'use strict'
/* 
	Fallback server for supporting browserHistory
	in your React application. 
*/


//instatiate path and express
const express = require('express');
const path = require('path');
const app = express();
//body parser to process forms
const bodyParser = require('body-parser');
// Routers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const Index = require('./routes/index');

//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));


// mount routers
app.use('/', Index);
//app.use('/blog/posts', routePosts);

//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(3030,()=>console.log('running on localhost:3030'))