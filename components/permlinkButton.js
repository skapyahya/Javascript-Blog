/*
**
** permlinkButton.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
*/

// import dependencies
var React = require('react');

// permlink button
module.exports = React.createClass(
	{
		render : function ()
		{
			var url='/p/'+this.props.obd;
			return (
				<a href={url}>Permlink</a>
			);
		}
	}
);
