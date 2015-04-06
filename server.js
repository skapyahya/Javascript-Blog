/*
**
** server.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
** Entry point for the blog
**
*/

// importing stuffs
var express = require('express');
var app = express();
var hb = require('express-handlebars');
var routes = require('./routes.js');

// set view engine
app.engine('handlebars', hb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set app ports and host
app.set('port', (process.env.PORT || 5000 ));

// create a route for home page
app.get('/', routes.home );

// create a route for getting data
app.get('/data', routes.data );

// permlink page
app.get( '/p/:objId', routes.permlink );

// n-page
app.get( '/n/:n', routes.npage );

// static content
app.use( express.static('public') );

// getting server to start serving
var server = app.listen ( app.get('port'), function ()
{
	var host = server.address().address;
	var port = server.address().port;

	console.log( 'Blog running at http://%s:%s', host, port );
});
