import React from 'react';
require("./Findings.css");

var Finding = React.createClass({
  render(){
    return (
      <div className="finding">
      	<span className="visual">{this.props.visual}</span>
      	<span className="description">{this.props.description}</span>
      </div>
    )
  }
});

var Findings = React.createClass({
  render(){
    return (
      <div className="findings-container">
      	<div className="findings-heading">
          <h2>Findings</h2>
        </div>
        <Finding/>
        <Finding/>
        <Finding/>
      </div>
    )
  }
});

module.exports = Findings;