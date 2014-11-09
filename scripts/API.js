/**
* Provided under the MIT License (c) 2014
* See LICENSE @file for details.
*
* @file API.js
*
* @author juanvallejo
* @date 10/15/14
*
* Holds all APIs for obtaining data related to word of the day app
* 
*/

// define global API object. Check if node.js being used or not
if(typeof require != 'undefined') {
	var API = {};

	module.exports = API;
} else {
	window.API = {};
}