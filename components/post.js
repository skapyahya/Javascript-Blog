/*
**
** post.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
*/

// import dependencies
var React = require('react');
var Datetime = require('./dateTime');
var Title = require('./title');
var Content = require('./content');
var Actionbar = require('./actionBar');

/*
** This is the one single Post
** which shows the date, Title, content and actionbar
** actionbar takes care of like, comment and permlink
*/
module.exports = React.createClass(
	{
		render : function ()
		{
			return (
				<div className='post' id={this.props.post.objectId} >
					<Datetime dt={this.props.post.createdAt} />
					<Title tit={this.props.post.Title} />
					<Content pr={this.props.post.Content} img={this.props.post.Img} />
					<Actionbar obd={this.props.post.objectId} />
				</div>
			);
		}
	}
);
