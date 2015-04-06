/*
**
** contentPreview.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
** the list of all titles of posts in the blog
**
*/

// import dependencies
var React = require('react');

/*
** Content Preview
** It shows the title of every post in the blog
** at the side so that the user can click on it and get to the
** post easily than scroll all the way through
*/
module.exports = React.createClass(
	{
		render : function ()
		{
			var titles = this.props.data.map( function(posts)
			{
				var id = "#"+posts.objectId;
				return (
					<div className='pre_title'>
						<a href={id} >{ posts.Title }</a>
					</div>
				);
			});
			return (
				<div className='pre'>
					{titles}
				</div>
			);
		}
	}
);
