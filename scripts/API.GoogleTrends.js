/**
* Provided under the MIT License (c) 2014
* See LICENSE @file for details.
*
* @file API.GoogleTrends.js
*
* @author juanvallejo
* @date 10/15/14
*
* Main API file. Outputs the top trending search term from Google Trends to local product APIS.
* Used to feed returned term.
* 
* API Server response can be accessed @ http://localhost:8000/
*/

(function() {

/**
 * define app global variables
 */

var appName = 'MainServerAPI';

/**
 * define main function. Called on app load.
 */
(function main() {
    // add to main API
    window.API.GoogleTrends = {};
})();

/**
 * define API methods
 */

/**
 * returns trending word as parameter in callback function
 * 
 * @param callback  {Function}  function to call after response is received from server
 */
API.GoogleTrends.getTrendingWord = function(callback) {
    // make sure callback is of type Function
    callback = callback || function() {};

    httpRequest('http://navigator-fixed.rhcloud.com/apis/http://www.google.com/trends/hottrends/atom/hourly', function(response) {
        var parser = new DOMParser();
        var XMLDoc = parser.parseFromString(response, "text/html");

        // output formatted xml document .. list of <li> items. User .innerText to retrieve content
        var outputResults = XMLDoc.getElementsByTagName('content')[0].getElementsByTagName('li');

        callback.call(this, outputResults[0].innerText);        
    });
};

API.GoogleTrends.changeTrendingWord = function(callback) {
    // make sure callback is of type Function
    callback = callback || function() {};

    httpRequest('http://navigator-fixed.rhcloud.com/apis/http://www.google.com/trends/hottrends/atom/hourly', function(response) {
        var parser = new DOMParser();
        var XMLDoc = parser.parseFromString(response, "text/html");

        // output formatted xml document .. list of <li> items. User .innerText to retrieve content
        var outputResults = XMLDoc.getElementsByTagName('content')[0].getElementsByTagName('li');

        // change global word
        console.log(Math.round((Math.random()) * 5));
        // App.wordOfTheDay = outputResults[Math.round((Math.random()))].innerText

        callback.call(this, App.wordOfTheDay);        
    });
};

})();