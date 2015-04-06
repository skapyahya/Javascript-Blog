/*
**
** post.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
** All Parse IO operations
**
*/

// setting up parse
var Parse = require('parse').Parse;
/* --------- Parse.initialize("*****", "******"); here ----------- */

// function as key for sorting
var sortKey = function ( a, b )
{
	var x = new Date(a.createdAt );
	var y = new Date( b.createdAt );
	return (x-y);
}

// function to get all posts from parse
function read_from_parse( callback )
{
	var Posts = Parse.Object.extend('TABLE NAME');
	var query = new Parse.Query(Posts);
	query.find(
	{
		success : function ( result )
		{
			callback( result.sort(sortKey) );
		},

		error : function ( error )
		{
			console.log('Error while reading from parse');
		}
	});
}

// function to get a single post from parse
function get_post ( objId, callback )
{
	var Post = Parse.Object.extend('TABLE NAME');
	var query = new Parse.Query(Post);
	query.get(objId, {
		success : function( result )
		{
			callback(result);
		},
		error : function ( error )
		{
			console.log(error);
		}
	});
}

// export the func's
module.exports = {

    read_from_parse : read_from_parse,
    get_post : get_post

}
