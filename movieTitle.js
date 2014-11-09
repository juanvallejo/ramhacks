(function() {

	// main function
	(function main() {
		window.API.MovieList = {};
	})();
		

	// @param queryName {String} gets the query from the trending words
	//Returns the following (in this order): 
	// Actors - comma separated list of actors
	// Director - 
	// Genre
	// Title
	// Year
	// imdbRating - 0.0 to 10.0
	// tomatoMeter -0 to 100
	API.MovieList.getProductList = function(queryName, callback) {
		callback = callback || function() {};
		
		var movieQuery = queryName.trim();				//Movie Title & Actor Name Search String
		movieQuery = movieQuery.replace(' ', '%20');	//convert spaces to %20
		
		httpRequest('http://www.imdbapi.com/?tomatoes=true&t=' + movieQuery, function(MovieContent) {
			
			MovieContent = JSON.parse(MovieContent);
			
			if (MovieContent.Reponse == "False") {
				return  ;			// if the movie is not found it will return this
			}
			else{
			
				delete MovieContent.Awards;			//delete extra data in array
				delete MovieContent.BoxOffice;
				delete MovieContent.Language;
				delete MovieContent.Metascore;
				delete MovieContent.Plot;
				delete MovieContent.Poster;
				delete MovieContent.Production;
				delete MovieContent.Rated;
				delete MovieContent.Released;
				delete MovieContent.Response;
				delete MovieContent.Runtime;
				delete MovieContent.Type;
				delete MovieContent.Website;
				delete MovieContent.Writer;
				delete MovieContent.imdbID;
				delete MovieContent.imdbVotes;
				delete MovieContent.tomatoConsensus;
				delete MovieContent.tomatoFresh;
				delete MovieContent.tomatoImage;
				delete MovieContent.tomatoRating;
				delete MovieContent.tomatoReviews;
				delete MovieContent.tomatoRotten;
				delete MovieContent.tomatoUserMeter;
				delete MovieContent.tomatoUserRating;
				delete MovieContent.tomatoUserReviews;
				delete MovieContent.DVD;
				delete MovieContent.Country;
				
				//console.log(MovieContent);
			
			}

		});
		
		// return MovieContent
		callback.call(this, [MovieContent]);

	}
	
})();