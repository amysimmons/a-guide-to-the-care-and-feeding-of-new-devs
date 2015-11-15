import React from 'react';
require("./Recommendations.css");

var Recommendation = React.createClass({
  render(){
    return (
      <div className="recommendation">
      	<span className="visual">{this.props.visual}</span>
      	<span className="description">{this.props.description}</span>
      </div>
    )
  }
});

var Recommendations = React.createClass({

  render(){
    return (
      <div className="recommendations-container">
        <div className="recommendations-heading">
          <h2>Recommendations</h2>
        </div>
        <Recommendation/>
        <Recommendation/>
        <Recommendation/>
      </div>
    )
  }
});

module.exports = Recommendations;