import React from 'react';
require("./Recommendations.css");

var Recommendation = React.createClass({
  render(){
    return (
      <div className="recommendation">
      	<span className="visual"></span>
      	<span className="description"></span>
      </div>
    )
  }
});

var Recommendations = React.createClass({

  render(){
    return (
      <div className="recommendations">
      	<h2>Recommendations</h2>
      </div>
    )
  }
});

module.exports = Recommendations;