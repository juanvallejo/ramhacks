/**
* Provided under the MIT License (c) 2014
* See LICENSE @file for details.
*
* @file API.GoogleNews.js
*
* @author jlpeyton
* @date 10/15/14
*
* GoogleNews product API.
* 
*/

(function() {

/**
 * main function
 */
(function main() {
    // add this api to the global list of all APIs
    API.GoogleNews = {};
})();

/**
 * Gets 5 results from google news using specified keyword
 * Returns results from google news API
 *
 * @param keyword
 * @param callback
 */
API.GoogleNews.getProductList = function(keyword, callback) {
    callback = callback || function() {};

    httpRequest('https://navigator-fixed.rhcloud.com/apis/https://news.google.com/news/feeds?q=' + keyword +'&output=rss', function(content) {
        var results = [];

        for (var i = 0; i<5 ;i++) {
            var parser = new DOMParser();

            // convert response to json format
            var json = xmlToJson(parser.parseFromString(content, "text/html"));

            var html = json.HTML.BODY.RSS.CHANNEL.ITEM[i].DESCRIPTION['#text'];

            var link = parser.parseFromString(html, "text/html").querySelector('table tbody tr td.j div.lh a');

            var description = parser.parseFromString(html, "text/html").querySelector('table tbody tr td.j font div.lh font:nth-child(5)').innerHTML;

            results.push({
                description : description,
                link        : link
            });
            // document.write(description + "<br /><br />" + " <a href=\"" + link + "\"> read more.</a><br /><br />");
        }

        // call callback function
        callback.call(this, results);
    });
};

})();