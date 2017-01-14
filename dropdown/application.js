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
	ReactDOM.render(element, document.querySelector('.container'))

var Badge = React.createClass({displayName: "Badge",
  render: function(){
  return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
this.props.title, React.createElement("span", {className: "badge"}, this.props.number)
)
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function() {
			var list = this.props.thumbnailData.map(function(thumbnailProps){
				return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		});
		return React.createElement("div", null, 
			list
			)
		}
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function(){
		return React.createElement("div", {className: "col-sm-6"}, 
			 React.createElement("div", {className: "thumbnail"}, 
	      React.createElement("img", {src: this.props.imageURL}), 
	      React.createElement("div", {className: "caption"}, 
	        React.createElement("h3", null, this.props.header), 
	        React.createElement("p", null, this.props.description), 
	        React.createElement("p", null, 
						React.createElement(Badge, {title: this.props.title, number: this.props.number})
					)
      	)
    	)
		)
	}
});
