/*
**
** page.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
*/

// import dependencies
var React = require('react');
var ContentPreview = require('./contentPreview');
var Posts = require('./posts');
var NPage = require('./nPage');

// function as key for sorting
var sortKey = function ( a, b )
{
	var x = new Date(a.createdAt );
	var y = new Date( b.createdAt );
	return -1*(x-y);
}

/*
** This is the whole page of the blog homepage
** consists of posts which is the list of all the posts in the blog
** the content preview which is the title of all the posts in the blog
*/
module.exports = React.createClass(
	{
		render : function ()
		{
			var sortedData = JSON.parse(this.props.data).sort(sortKey);
			return (
				<div className='container'>
					<div className='row'>
						<NPage length={this.props.l} />
					</div>
					<div className='row'>
						<div className='col-md-2'>
							<ContentPreview data={sortedData} />
						</div>
						<div className='col-md-8 col-md-offset-1'>
							<Posts data={sortedData} />
						</div>
					</div>
				</div>
			);
		}
	}
);
