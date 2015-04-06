/*
**
** actionBar.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
*/

// import dependencies
var React = require('react');
var LikeButton = require('./likeButton');
var CommentList = require('./commentList');
var PermlinkButton = require('./permlinkButton');

// actionbar of each post
module.exports = React.createClass(
	{
		render : function ()
		{
			return (
				<div className='post-action'>
					<LikeButton obd={this.props.obd} />
					<CommentList obd={this.props.obd} />
					<PermlinkButton obd={this.props.obd} />
				</div>
			);
		}
	}
);
