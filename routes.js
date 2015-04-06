/*
**
** routes.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
** The route handler functions
**
*/

// importing stuff
var JSX = require('node-jsx').install();
var model = require('./models/post');
var React = require('react');

var pageComponent = require('./app').Page;
var Page = React.createFactory(pageComponent);

module.exports = {

    home : function ( req, res )
    {
        // home page here
        model.read_from_parse( function(posts)
    	{
            var data;
            if ( posts.length > 5 )
            {
                data = JSON.stringify(posts.slice(-5,posts.length));
            }
            else
            {
                data = JSON.stringify(posts);
            }
            var markup = React.renderToString( Page( { data : data, l : posts.length } ) );
            res.render( 'home', {
                markup : markup,
                data : data,
                l : posts.length,
                SiteTitle : "",
                stylesheet : "/css/main.css"
            });

    	});
    },

    npage : function ( req, res )
    {
        var n  = req.params['n'];
        var lowerIndex = -5 * n;
        var upperIndex = -5 * ( n - 1 );

        model.read_from_parse( function (posts)
        {
            var totalPossiblePages = (posts.length/5)+1;
            if ( n > totalPossiblePages || n <= 0 )
            {
                res.send("Error, Incorrect Index");
            }
            else
            {
                if ( n == 1 )
                {
                    res.redirect('/');
                }
                else
                {
                    if ( n%5 != 0 )
                    {
                        lowerIndex = 0;
                    }
                    var data = JSON.stringify(posts.slice(lowerIndex, upperIndex));
                    var markup = React.renderToString( Page( { data : data, l : posts.length } ) );
                    res.render( 'home', {
                        markup : markup,
                        data : data,
                        l : posts.length,
                        SiteTitle : " | Page "+n,
                        stylesheet : "/css/main.css"
                    });
                }
            }
        });
    },

    permlink : function ( req, res )
    {
        // permlink page here
        model.get_post( req.params['objId'], function(post)
    	{
    		var para = post.get('Content').split('\n');
    		var img = post.get("Img");
    		var pre_img = false;
    		if ( img && "0" in img )
    		{
    			pre_img = img["0"];
    		}
    		res.render('permlink',{
    			stylesheet : '/css/permlink.css',
    			SiteTitle : '| '+post.get('Title'),
    			content : para,
    			pre_image : pre_img,
    			helpers : {
    				title : function ()
    				{
    					return post.get('Title');
    				},
    				datetime : function ()
    				{
    					var dt = new Date(post.createdAt);
    					return dt.toDateString();
    				},
    				url : function ()
    				{
    					return "http://URL_HERE/p/"+req.params['objId'];
    				}
    			}
    		});
    	});
    },

    data : function ( req, res )
    {
        // data api page here
        model.read_from_parse( function(posts)
    	{
    		res.send(posts);
    	});
    }

}
