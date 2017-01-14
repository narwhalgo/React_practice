var React = require('react');
var Badge = require('./badge.jsx');

module.exports = React.createClass({
	render: function(){
		return <div className="col-sm-6">
			 <div className="thumbnail">
	      <img src={this.props.imageURL} />
	      <div className="caption">
	        <h3>{this.props.header}</h3>
	        <p>{this.props.description}</p>
	        <p>
						<Badge title ={this.props.title} number = {this.props.number}/>
					</p>
      	</div>
    	</div>
		</div>
	}
});
