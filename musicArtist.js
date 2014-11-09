

// Searches and returns the data for a music artist
// https://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html
// @param queryName {String} 
function musicQuery(queryName) {
	var queryName = 'Dream Theater';
	
	var artistQuery = queryName.trim();					//Music artist search string 
	artistQuery = artistQuery.replace(' ', '+');			//- convert spaces to plus signs
	
	var i = 0;
	
	httpRequest('https://itunes.apple.com/search?term=' + artistQuery + '&entity=musicTrack&limit=5', function(AppleContent) {
		AppleContent = JSON.parse(AppleContent);
		
		while (i<5){										//delete extra data in array
			delete AppleContent.results[i].wrapperType;
			delete AppleContent.results[i].kind;
			delete AppleContent.results[i].artistId;
			delete AppleContent.results[i].collectionId;
			delete AppleContent.results[i].trackId;
			delete AppleContent.results[i].collectionCensoredName;
			delete AppleContent.results[i].trackCensoredName;
			delete AppleContent.results[i].collectionViewUrl;
			delete AppleContent.results[i].previewUrl;
			delete AppleContent.results[i].artworkUrl30;
			delete AppleContent.results[i].artworkUrl60;
			delete AppleContent.results[i].artworkUrl100;
			delete AppleContent.results[i].collectionPrice;
			delete AppleContent.results[i].trackPrice;
			delete AppleContent.results[i].releaseDate;
			delete AppleContent.results[i].collectionExplicitness;
			delete AppleContent.results[i].trackExplicitness;
			delete AppleContent.results[i].discCount;
			delete AppleContent.results[i].discNumber;
			delete AppleContent.results[i].trackCount;
			delete AppleContent.results[i].trackNumber;
			delete AppleContent.results[i].trackTimeMillis;
			delete AppleContent.results[i].country;
			delete AppleContent.results[i].currency;
			delete AppleContent.results[i].primaryGenreName;
			delete AppleContent.results[i].radioStationUrl;
			i++;
		}
		
		//console.log(AppleContent);
		
		
	});

	return AppleContent;
}