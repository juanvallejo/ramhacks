var keyword = 'Big Hero 6';

var xmlToJson = function(xml) {
    // Create the return object
    var obj = {};
 
    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    }
    else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }
 
    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            }
            else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};


httpRequest('https://news.google.com/news/feeds?q=' + keyword +'&output=rss', function(content) {
    for (var i = 0; i<5 ;i++) {
        var parser = new DOMParser();

        // convert response to json format
        var json = xmlToJson(parser.parseFromString(content, "text/html"));

        var html = json.HTML.BODY.RSS.CHANNEL.ITEM[i].DESCRIPTION['#text'];

        var link = parser.parseFromString(html, "text/html").querySelector('table tbody tr td.j div.lh a');

        var description = parser.parseFromString(html, "text/html").querySelector('table tbody tr td.j font div.lh font:nth-child(5)').innerHTML;

        document.write(description + "<br /><br />" + " <a href=\"" + link + "\"> read more.</a>");
        document.write("<br /><br />")
    }
});

// used to get content from a url
// @param url {String} url to get content from
// @callback {Function} function to call after response received from server

// @returned_param_from_server this.responseText    {String}    String of text from page source
// @returned_param_from_server this.responseXML     {XMLObject} XML Document Object
//
function httpRequest(url, callback) {
    // make sure callback is of type Function
    callback = callback || function() {};

    var getReq = new XMLHttpRequest();
    getReq.open('GET', 'https://navigator-fixed.rhcloud.com/apis/' + url, true);
    getReq.send(null);

    getReq.addEventListener('readystatechange', function() {
        if(this.readyState == 4 && this.status == 200) {
            callback.call(this, this.responseText, this.responseXML);
        }
    });

}

