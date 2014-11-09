function addProductToCategory(categoryId, productArray, properties) {
	// wrapper becomes ul tag in UI view
	var wrapper = document.getElementById(categoryId);

	console.log(productArray);

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
				spans[spans.length-1].innerHTML = '<a href="' + productArray[i][category[0]][category[1]] + '">' + productArray[i][category[0]][category[1]] + '</a>';
			} else {
				spans[spans.length-1].innerHTML=productArray[i][properties[s]];
			}
		}

		// set the content of these elements
		mainDiv.innerHTML = "<img src='images/holiday.png'/>";

		// set the class name of these divs
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