/*
**
** nPage.js
**
** Yahya Ayash Luqman
** yaluqman@gmail.com
**
** The portion which lets you navigate between pages
**
*/

// import stuffs
var React = require( 'react' );

module.exports = React.createClass(
    {
        prev : function ()
        {
            if ( window.location.pathname.split("/")[1] == "n" )
            {
                var curr = window.location.pathname.split("/")[2];
                window.location.pathname = "/n/"+(curr-1).toString();
            }
        },
        nex : function ()
        {
            if ( window.location.pathname.split("/")[1] == "n" )
            {
                var curr = window.location.pathname.split("/")[2];
                window.location.pathname = "/n/"+(curr+1).toString();
            }
            else
            {
                window.location.pathname = "/n/2";
            }
        },
        render : function ()
        {
            var l = (this.props.length/5)+1;
            var range = [];
            for ( var i=1; i<=l; i++ )
            {
                range.push(i);
            }
            var isActive;
            var curr;
            if ( typeof window != "undefined" )
            {
                if ( window.location.pathname.split('/')[1] == "n" )
                {
                    curr = window.location.pathname.split('/')[2];
                }
                else
                {
                    curr = 1;
                }
            }
            var buttons = range.map(function(i){
                var link = "/n/"+i;
                if ( i == curr )
                {
                    isActive = "active";
                }
                else
                {
                    isActive = "";
                }
                return (
                    <li className={isActive}>
                        <a href={link} >{i}</a>
                    </li>
                );
            });
            return (
                <div className="n-page">
                        <ul className='pagination'>
                            <li>
                                <a href="#" aria-label="Previous" onClick={this.prev} >
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            {buttons}
                            <li>
                                <a href="#" aria-label="Next" onClick={this.nex} >
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                </div>
            );
        }
    }
);
