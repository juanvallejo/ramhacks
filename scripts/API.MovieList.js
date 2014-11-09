(function() {

	// main function
	(function main() {
		window.API.MovieList = {};
	})();
		

		// @param queryName {String} gets the query from the trending words
		//Returns the following (in this order): 
		//links.alternate
		//ratings.critics_score     ** -1 when none **
		//synopsis
		//title
		//year
		API.MovieList.getProductList = function(queryName, callback) {
		callback = callback || function() {};
		
		var movieQuery = queryName.trim();				//Movie Title & Actor Name Search String
		movieQuery = movieQuery.replace(' ', '%20');	//convert spaces to %20
		var i=0;
		
		httpRequest('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=csu7tr3mhfw52dge9tqw5cwf&q=' + movieQuery + '&page_limit=5', function(MovieContent) {
		
			MovieContent = JSON.parse(MovieContent);
		
		delete MovieContent2.link_template;
		delete MovieContent2.links;
		delete MovieContent2.total;
		
		var products = [];
		
		while (i<5){
			delete MovieContent2.movies[i].id;
			delete MovieContent2.movies[i].abridged_cast;
			delete MovieContent2.movies[i].links.cast;
			delete MovieContent2.movies[i].links.reviews;
			delete MovieContent2.movies[i].links.similar;
			delete MovieContent2.movies[i].links.self;
			delete MovieContent2.movies[i].mpaa_rating;
			delete MovieContent2.movies[i].posters;
			delete MovieContent2.movies[i].ratings.audience_score;
			delete MovieContent2.movies[i].release_dates;
			delete MovieContent2.movies[i].runtime;
			
			products.push(MovieContent2.movies[i]);
			
			i++;
		}
		

			
			}

			// return products
			callback.call(this, [products]);
		});

	}
	
})();