/*
**
** title.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
*/

// import dependencies
var React = require('react');

// title of the post
module.exports = React.createClass(
	{
		render : function ()
		{
			return (
				<h3>{this.props.tit}</h3>
			);
		}
	}
);
