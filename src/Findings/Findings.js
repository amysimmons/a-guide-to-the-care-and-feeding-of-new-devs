import React from 'react';
require("./Findings.css");

var Finding = React.createClass({
  render(){
    return (
      <div className="finding">
      	<span className="visual"></span>
      	<span className="description"></span>
      </div>
    )
  }
});

var Findings = React.createClass({

  render(){
    return (
      <div className="findings">
      	<h2>Findings</h2>
      </div>
    )
  }
});

module.exports = Findings;