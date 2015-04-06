/*
**
** commentList.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
*/

// import dependencies
var React = require('react');

module.exports = React.createClass({
	render : function ()
	{
		var url = "http://URL HERE/p/" + this.props.obd;
		return (
			<div className="fb-comments" data-href={url} data-numposts="2" data-colorscheme="light"></div>
		);
	}
});
