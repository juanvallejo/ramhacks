/**
 * makes http requests to specified url. Returns response as callback param
 * 
 * @param url       {String}    url of server to get response from
 * @param callback  {Function}  function to call after response is received from server
 */
function httpRequest(url, callback) {
    // create new HttpRequest object
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send(null);

    xhr.addEventListener('readystatechange', function() {
        if(this.readyState == 4 && this.status == 200) {
            callback.call(this, this.responseText);
        }
    });
}