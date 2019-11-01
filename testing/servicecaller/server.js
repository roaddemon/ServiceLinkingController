const express = require('express');
const app = express();
const request = require('request');

app.get('/', (req, res) => {
  
  request('http://helloworld-service', {json: true}, (err, res, body) => {
	if(err) { res.send('err');}
	res.send(body);	
  });  
});


app.get('/local', (req, res) => {
  
  request('http://ac7163b8cfcdb11e9a6b112cbeddf5e6-1750930170.us-east-1.elb.amazonaws.com', {json: true}, (err, res2, body) => {
	if(err) { res.send(err);}
	res.send(body);	
  });  
});


app.get('/hello', (req, res) => {
  
  
	res.send("hello");	

});




// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});