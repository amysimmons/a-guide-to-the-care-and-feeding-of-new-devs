import React from 'react';
require("./Header.css");

var Header = React.createClass({

  render(){
    return (
      <div className="header">
      	<h1>A guide to the care and feeding of new devs</h1>
      </div>
    )
  }
});

module.exports = Header;