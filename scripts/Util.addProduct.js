function addProductToCategory(categoryId, productArray, properties) {
	// wrapper becomes ul tag in UI view
	var wrapper = document.getElementById(categoryId);

	console.log(productArray);

	for(var i = 0;i < productArray.length;i++) {
		// create new HTML elements
		var li = document.createElement('li');
		var mainDiv = document.createElement('div');
		var innerDiv = document.createElement('div');
		var spanTitle = document.createElement('span');
		var spanDescription = document.createElement('span');

		// set the content of these elements
		mainDiv.innerHTML = "<img src='images/holiday.png'/>";
		spanTitle.innerHTML = productArray[i][properties[0]];
		spanDescription.innerHTML = productArray[i][properties[1]];

		// set the class name of these divs
		mainDiv.className = "j-listview-item announcement";
		innerDiv.className = "j-listview-item-content";

		// append divs to one another
		innerDiv.appendChild(spanTitle);
		innerDiv.appendChild(spanDescription);
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