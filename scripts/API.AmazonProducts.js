
(function(){
//Starts the needed variables and the required information
var aws = window.aws;
var prodAdv = aws.createProdAdvClient("AKIAJM2KCIYE5XGZNRCQ", "iYBr7zSbypzWMmGPHuck2MgKUHlQ2xxAzsxIWIgS", "lorflupanhom-20");
//	Ends the required information 

//main function
(function main() {
	// add api to main global list of apis
	window.API.AmazonProducts = {};
})();

// Options needs a SearchIndex which should be All, and the keyword would be the Word of the Day

var JasonListItems;
var ManufactorList = ["1","2","3","4","5"];
var ProductGroupList= ["1","2","3","4","5"];
var TitleList= ["1","2","3","4","5"];
var products = []
//Makes the call to populate the the JSON List Items
API.AmazonProducts.getProductList = function(PWord,callback) {
	var options = {SearchIndex: "VideoGames", Keywords: PWord};
	prodAdv.call("ItemSearch", options, function(err, result) {
	JasonListItems = result.Items;
	for (var i = 0; i< 5; i++){
		ManufactorList[i] =  JasonListItems.Item[i].ItemAttributes.Manufacturer
		ProductGroupList[i] = JasonListItems.Item[i].ItemAttributes.ProductGroup
		TitleList[i] = JasonListItems.Item[i].ItemAttributes.Title
		products.push({
			link: JasonListItems.Item[i].DetailPageURL,
			manufactor: ManufactorList[i],
			title: TitleList[i],
			group: ProductGroupList[i]
		});
	}
	callback.call(this,products)
	});

};
})();
