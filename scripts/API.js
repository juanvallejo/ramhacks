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

API.events = {};

API.on = function(eventName, callback) {
	// make sure event key has been initialized
	API.events[eventName] = API.events[eventName] || [];

	// push callback to array of functions for eventName key
	API.events[eventName].push(callback);
};

API.emit = function(eventName, arguments) {
	console.log('emitting '+ eventName);
	// make sure event key has been initialized
	API.events[eventName] = API.events[eventName] || [];

	// call each of the eventname's callback functions
	API.events[eventName].forEach(function(action) {
		action.apply(this, arguments);
	});
};