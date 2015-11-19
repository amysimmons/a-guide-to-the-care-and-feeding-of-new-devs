import React from 'react';
require("./Footer.css");

var Footer = React.createClass({

  render(){
    return (
    <div className="footer">
	  	<div className="footer-about-container">
	  		<div className="footer-about-heading">
	  			<h2>About the data</h2>
	  		</div>
  		 	<div className="footer-about-content">
	  		 	<p>This data was collected via an <a href="https://docs.google.com/forms/d/1Dit-eI7Apd9_PQAK0yIumJVyeNQyOR_zWDH9UxN0fgg/viewform?c=0&w=1">online survey</a> over a two-week period in November 2015.
	  			The stories are unedited. Overseas responses were not included in the findings, to ensure an accurate portrayal of the Australian tech industry.
	  			The survey was conducted as research for a talk that I gave at <a href="http://vi.campjs.com/sessions.html#sdwmyf">CampJS</a> on November 21, 2015.</p>
	  		</div>
	  	</div>
	  	<div className="footer-contact-container">
	  		<div className="footer-contact-heading">
	  			<h2>Get in touch</h2>
	  		</div>
	  		<div className="footer-contact-content">
	  			<a href="https://twitter.com/amesimmons"><i className="fa fa-twitter"></i></a>
				<a href="https://github.com/amysimmons"><i className="fa fa-github"></i></a>
	  		</div>
	  	</div>
  	</div>
    )
  }
});

module.exports = Footer;
