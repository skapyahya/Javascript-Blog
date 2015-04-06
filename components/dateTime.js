/*
**
** datetime.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
*/

// install dependencies
var React = require('react');

// nice date
var niceDate = function( date )
{
	if ( !date )
	{
		return "";
	}
	var x = new Date( date );
	return x.toDateString();
}

// the date of each post
module.exports = React.createClass(
	{
		render : function ()
		{
			return (
				<span className='datetime'>{niceDate(this.props.dt)}</span>
			);
		}
	}
);
