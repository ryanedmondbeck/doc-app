import React from 'react';
import axios from 'axios';
var parseString = require('xml2js').parseString;

export default class DocumentList extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			documents: 'stuff'
		}
	}

	componentDidMount() {
		const cors_api_url = 'https://cors-anywhere.herokuapp.com/'
		const url = 'dev1.chili-publish.com/CHILI/rest-api/v1/resources/Documents/treelevel?parentFolder=templates&numLevels=1';
		const headers = {
  			headers: {
    			'Accept': 'application/xml',
    			'API-KEY': 'testKey1234=',
  			}
		};
		// send a get request
		function getDocuments() {
			return axios.get(cors_api_url + url, headers)
				.then(res => {
					
					parseString(res.data, (err, result) => {
					 
					    var doc_string = JSON.stringify(result);
					    console.log(doc_string);
					    // return doc_string;

					});
					
				})
				.catch(() => console.log("Can’t access " + url + " response."))
		}
		this.setState(() => ({
			documents: this.state.documents + getDocuments()
		}));
		console.log(this.state.documents)
	}

  	render() {
    	return <p>{this.state.documents}</p>;
  	}
}