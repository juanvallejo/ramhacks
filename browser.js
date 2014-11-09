var def = {
	'css':'text/css',
	'gif':'image/gif',
	'html':'text/html',
	'ico':'image/x-ico',
	'jpg':'image/jpeg',
	'jpeg':'image/jpeg',
	'json':'application/json',
	'js':'application/javascript',
	'png':'image/png',
	'txt':'text/plain'
};

var fs = require('fs'),app = require('http').createServer(function(req, res) {
	// get incoming request information
	var url = req.url == '/' ? '/index.html' : req.url;
	var ext = req.url.split('.');
		ext = ext[ext.length-1];

	if(url.match(/^\/(tests)(\/)/gi)) {
		var urlend = url.split('/');
			urlend = urlend[urlend.length-1];
		if(urlend.match(/^[1-9]+$/gi)) {
			fs.readdir(__dirname+'/tests/',function(err,files) {
				var validFiles = [];
				files.forEach(function(file) {
					if(!file.match(/^(\.)(.*)/gi)) {
						validFiles.push(file);
					}
				});
				route('/tests/'+validFiles[urlend-1], req, res);
			})
		} else {
			route(url, req, res);
		}
	} else {
		route(url, req, res);
	}
}).listen(8000);

// create routing for files and serve files
function route(path, req, res) {
	var ext = path.split('.');
		ext = ext[ext.length-1];

	fs.readFile(__dirname+path,function(err,data) {
		if(err) {
			res.writeHead(404);
			return res.end("File Not Found.");
		}
		res.writeHead(200,{'Content-Type':def[ext]});
		res.end(data);
	});
};