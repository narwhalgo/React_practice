var React = require('react');
var ThumbnailList = require('./thumbnail-List');


var options = {
	thumbnailData : [{
		title: 'Tutorials',
		number: 42,
		header: 'Learn React',
		description: 'Learning React is the bees knees. By the end of this course you will be able to build things beyond your wildest dreams haha',
		imageURL: 'http://coenraets.org/present/react/img/react.png'
	},{
		title: 'Tutorials',
		number: 25,
		header: 'Learn Gulp',
		description: 'Gulp will speed up your workflow dog.',
		imageURL: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
	}]
};
	//request render
	var element = React.createElement(ThumbnailList, options);

	//tell react where to place rendered element
	React.render(element, document.querySelector('.container'))
