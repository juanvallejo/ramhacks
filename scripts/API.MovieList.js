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
		movieQuery = movieQuery.replace(' ', '+');	//convert spaces to %20
			
		httpRequest('http://www.imdbapi.com/?t='+movieQuery+'+&y=&plot=short&r=json', function(MovieContent){
			var products = [];
			products.push(JSON.parse(MovieContent));
			callback.call(this,products);
		});
		// httpRequest('http://navigator-fixed.rhcloud.com/apis/http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=csu7tr3mhfw52dge9tqw5cwf&q='+ queryName +'&page_limit=5', function(MovieContent) {
		
		// MovieContent2 = JSON.parse(MovieContent);
		// console.log(MovieContent2);
		// var products = [];
		// for (var i=0; i < MovieContent2.movies.length; i++)
		// {		
		// 	products.push(MovieContent2.movies[i]);
		// }
		// return products
		// 	callback.call(this, products);
		// });

	}
	
})();