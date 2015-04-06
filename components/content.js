/*
**
** content.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
*/

// import dependencies
var React = require('react');

// content of the post
module.exports = React.createClass(
	{
		render : function ()
		{
			var para = this.props.pr.split('\n');
			var img = this.props.img;
			var paragraph = para.map(function(par)
			{
				return (
					<p>{par}</p>
				);
			});
			var pre_img = function()
			{
				if ( img && "0" in img )
				{
					return (
						<img className='img-post' src={img["0"]} />
					);
				}
				else
				{
					return false;
				}
			}
			return (
				<div class='paragraph'>
					{pre_img()}
					{paragraph}
				</div>
			);
		}
	}
);
