import React from 'react';
require("./Recommendations.css");

var Recommendation = React.createClass({
  render(){
    return (
      <div className="recommendation">
      	<span className="description">
          <p>{this.props.description}</p>
        </span>
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
        <Recommendation description={"One on ones with a mentor/buddy"}/>
        <Recommendation description={"Pair programming & code reviews"}/>
        <Recommendation description={"Time to learn all the things"}/>
      </div>
    )
  }
});

module.exports = Recommendations;