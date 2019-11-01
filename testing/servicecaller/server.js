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
  
  request('a33d774fefce011e99d64025bef8112a-908901190.us-east-1.elb.amazonaws.com', {json: true}, (err, res2, body) => {
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