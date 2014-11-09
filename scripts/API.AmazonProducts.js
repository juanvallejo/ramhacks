/**
* Provided under the MIT License (c) 2014
* See LICENSE @file for details.
*
* @file API.js
*
* @author LordFluffyPants, juanvallejo
* @date 10/15/14
*
* Node.js hybrid API service.
* Serves the Amazon product API on port 8080
* 
* http://localhost:8080/getProductList/word
*/

// declare Service.externalAPIS constants
var PORT 	= 8080;											// localhost port to bind application to

// load all Service apis
var fs 		= require('fs');								// import filesystem io package
var http 	= require('http');								// import http server package

// store our API here
var API = {};

(function(API){
//Starts the needed variables and the required information
var aws = require('aws-lib');
var prodAdv = aws.createProdAdvClient("AKIAJM2KCIYE5XGZNRCQ", "iYBr7zSbypzWMmGPHuck2MgKUHlQ2xxAzsxIWIgS", "lorflupanhom-20");
//	Ends the required information 

//main function
(function main() {
	// add api to main global list of apis
	API.AmazonProducts = {};
})();

//Makes the call to populate the the JSON List Items
API.AmazonProducts.getProductList = function(PWord, callback) {
	callback = callback || function() {};

	// Options needs a SearchIndex which should be All, and the keyword would be the Word of the Day
	var JasonListItems;
	var ManufactorList = ["1","2","3","4","5"];
	var ProductGroupList= ["1","2","3","4","5"];
	var TitleList= ["1","2","3","4","5"];
	var products = [];

	var options = {SearchIndex: "All", Keywords: PWord};
	prodAdv.call("ItemSearch", options, function(err, result) {
		JasonListItems = result.Items;

		if(JasonListItems.Item) {
			for (var i = 0; i < JasonListItems.Item.length; i++){
				ManufactorList[i] =  JasonListItems.Item[i].ItemAttributes.Manufacturer
				ProductGroupList[i] = JasonListItems.Item[i].ItemAttributes.ProductGroup
				TitleList[i] = JasonListItems.Item[i].ItemAttributes.Title
				products.push({
					link: JasonListItems.Item[i].DetailPageURL,
					manufactor: ManufactorList[i],
					title: TitleList[i],
					group: ProductGroupList[i]
				});
			}
		}

		callback.call(this, products);
	});

};
})(API);

// create server to broadcast all external api libraries where needed
var server = http.createServer(function(req, res) {
	var params = req.url.split('/');

	if(params[1] && API.AmazonProducts[params[1]] && params[2]) {
		API.AmazonProducts[params[1]].call(this, (params[2] || ''), function(products) {
			res.writeHead(200, {'Access-Control-Allow-Origin' : '*'});
			res.end(JSON.stringify(products));
		});
	} else {
		res.end('');
	}
});

// have server listen on port PORT
server.listen(PORT);

