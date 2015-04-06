/*
**
** posts.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
*/

// import dependencies
var React = require('react');
var Post = require('./post');

/*
** Posts is the list of all Post
** in the blog,
** 10 should be shown at a time
*/
module.exports = React.createClass(
	{
		render : function ()
		{
			var pos = this.props.data.map( function(p)
			{
				return (
					<Post post={p} />
				);
			});
			return (
				<div className="posts">
					{pos}
				</div>
			);
		}
	}
);
