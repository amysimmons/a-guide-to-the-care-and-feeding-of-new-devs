import React from 'react';
require("./Footer.css");

var Footer = React.createClass({

  render(){
    return (
      <div className="footer">
      	<div className="footer-about">
      		<h2>About the data</h2>
      		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      	</div>
      	<div className="footer-contact">
      		<h2>Get in touch</h2>
			<a href="https://twitter.com/amesimmons"><i className="fa fa-twitter"></i></a>
			<a href="https://twitter.com/amesimmons"><i className="fa fa-github"></i></a>
      	</div>
      </div>
    )
  }
});

module.exports = Footer;