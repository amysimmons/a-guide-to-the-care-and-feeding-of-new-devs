import React from 'react';
require("./Header.css");

var Header = React.createClass({

  render(){
    return (
      <div className="header">
      	<h1 className="title">A guide to the care and feeding of new devs</h1>
      	<a href="https://twitter.com/amesimmons"><p className="byline">By Amy Simmons</p></a>
      </div>
    )
  }
});

module.exports = Header;