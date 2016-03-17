var initialCats = [
	{
		"name" : "Mocha",
		"imageSrc": "images/cat1.jpg",
		"counter": 0,
		"nickNames": ['Kutti', 'Katti', 'Chunnu', 'Munnu']
	},
	{
		"name": "Latte",
		"imageSrc": "images/cat2.jpg",
		"counter": 0,
		"nickNames": ['Coffee']
	},
	{
		"name": "Limca",
		"imageSrc": "images/cat3.jpg",
		"counter": 0,
		"nickNames": ['Soda', 'Cola']
	},
	{
		"name": "Pepsi",
		"imageSrc": "images/cat4.jpg",
		"counter": 0,
		"nickNames": ['Maaza', 'Fruity']
	},
	{
		"name": "Chai",
		"imageSrc": "images/cat5.jpg",
		"counter": 0,
		"nickNames": ['Ilaichi', 'Samosa']
	}
];

var Cat = function(data) {
	this.name = ko.observable(data.name);
	this.counter = ko.observable(data.counter);
	this.imageSrc = ko.observable(data.imageSrc);
	this.nickNames = ko.observableArray(data.nickNames);

	this.level = ko.computed(function(){
		var level;
		var clicks = this.counter();
		if (clicks < 10){
			level = "New Born";
		} else if (clicks < 50) {
			level = "Infant";
		} else if (clicks < 100) {
			level = "Child";
		} else if (clicks < 200) {
			level = "Teen";
		} else if (clicks < 500) {
			level = "Adult";
		} else {
			level = "Ninja";
		}
		return level;
	}, this);
};

var ViewModel = function(){
	var self = this;
	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);
	this.setCurrentCat = function(cat) {
		self.currentCat(cat);
	}



	this.incrementCounter = function(){
		self.currentCat().counter(self.currentCat().counter() + 1);
	}
}

ko.applyBindings(new ViewModel());
