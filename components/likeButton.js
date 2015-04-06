/*
**
** likeButton.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
*/

// import dependencies
var React = require('react');

// like button
module.exports = React.createClass(
	{
		render : function ()
		{
			var url = "http://URL HERE/p/" + this.props.obd;
			return (
				<div className="fb-like" data-href={url} data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>
			);
		}
	}
);
