var React = require('react');
var dropdown= require('./dropdown');


var options = {
	title: "Choose a Dessert",
	items: [
		'Apple Pie',
		'Peach Cobbler',
		'Coconut Cream Pie',
		'Ice Cream'
	]
};
	//request render
	var element = React.createElement(dropdown, options);

	//tell react where to place rendered element
	React.render(element, document.querySelector('.container'))
