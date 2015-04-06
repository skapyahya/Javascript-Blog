/*
**
** app.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
** Load the top level components here and export it
**
*/

// import dependencies
var React = require('react');
var Page = require('./components/page');

// if loaded in a browser do this
if(typeof window !== 'undefined')
{
	window.onload = function()
	{
		blogData = JSON.stringify(blogData);
    	React.render(<Page data={blogData} l={l} />, document.getElementById('main'));
  	}
}
else
{
	// export to node route
	module.exports = {

		Page : Page

	}
}
