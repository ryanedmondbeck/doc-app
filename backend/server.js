import axios from 'axios';
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get("/", cors(), (req, res) => {

	const url = 'https://dev1.chili-publish.com/CHILI/rest-api/v1/resources/Documents/treelevel?parentFolder=templates&numLevels=1';

	const headers = {
  		headers: {
   			'Accept': 'application/xml',
   			'API-KEY': 'testKey1234=',
  		}
	};
	// send a get request
	axios.get(url, headers)
		.then(res => {
			// const documents = res.data;
			console.log(res.data);
			return res;
		})	
		.catch(() => console.log("Can’t access " + url + " response."))

  	// make request to CHILI and forward response
  	// request(url).pipe(res);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`http://localhost:${port}`))
