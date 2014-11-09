function addProductToCategory(categoryId, productArray, properties, imagePath) {
	// wrapper becomes ul tag in UI view
	var wrapper = document.getElementById(categoryId);

	for(var i = 0;i < productArray.length;i++) {
		// create new HTML elements
		var li = document.createElement('li');
		var mainDiv = document.createElement('div');
		var innerDiv = document.createElement('div');

		// add spans for however many properties we have
		var spans = [];

		for(var s = 0; s < properties.length; s++) {
			var category = properties[s].split(".");
			spans.push(document.createElement('span'));
			
			if(category.length > 1) {
				var link = productArray[i][category[0]][category[1]];
				if (link.match(/^(http|https)/gi)){

					link = '<a href="' + link + '">Click For More Info</a>';
					spans[spans.length-1].innerHTML = link;
				}
				else{
					
					spans[spans.length-1].innerHTML = productArray[i][category[0]][category[1]];
				}

			} else {
				var singleLink = productArray[i][properties[s]];
				if(singleLink.match(/^(http|https)/gi)){

					singleLink = '<a href="'+singleLink + '">Click For More Info</a>';
					spans[spans.length-1].innerHTML = singleLink;
				}
				else{
					spans[spans.length-1].innerHTML=productArray[i][properties[s]];
				}
				
			}
		}

		// set the content of these elements
		mainDiv.innerHTML = "<img src='" + (imagePath || 'images/bunnybear.png') + "'/>";

		// set the class name of these divs
		li.className 	= "custom-listview";
		mainDiv.className = "j-listview-item announcement";
		innerDiv.className = "j-listview-item-content";

		// append spans yo
		spans.forEach(function(arrayItem, index) {
			innerDiv.appendChild(arrayItem);
		});

		// append divs to one another
		mainDiv.appendChild(innerDiv);
		li.appendChild(mainDiv);

		// append everything to the <ul> element
		wrapper.appendChild(li);

	}
};

// <li>
// 	<div class="j-listview-item announcement">
// 		<img src="images/holiday.png"/>
// 		<div class="j-listview-item-content">
// 			<span>this is title</span>	
// 			<span>this is description</span>
// 		</div>
// 	</div>
// </li>