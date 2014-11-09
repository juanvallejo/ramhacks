(function() {

	// main function
	(function main() {
		window.API.MusicList = {};
	})();
	
	// Searches and returns the data for a music artist
	// https://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html
	// @param queryName {String} 
	API.MusicList.getProductList = function(queryName, callback) {
		callback = callback || function() {};
		
		var artistQuery = queryName.trim();					//Music artist search string 
		artistQuery = artistQuery.replace(' ', '+');			//- convert spaces to plus signs

		httpRequest('https://navigator-fixed.rhcloud.com/apis/https://itunes.apple.com/search?term=' + artistQuery + '&entity=musicTrack&limit=5', function(AppleContent) {
			AppleContent = JSON.parse(AppleContent);
			var products = [];
			for (var i = 0; i <AppleContent.results.length; i++){
				products.push(AppleContent.results[i]);

			}
			
			
			//console.log(AppleContent);
			//return AppleContent;
			callback.call(this, products);
		});

	}
	
})();