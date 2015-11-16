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
  recommendationOneDescription(){
    return (
      <div>
        <p>Weekly one on one <span className="recommendation-highlight">sessions with a senior</span> mentor or buddy.</p>
      </div>
    )
  },
  recommendationTwoDescription(){
    return (
      <div>
        <p>Weekly <span className="recommendation-highlight">pair programming</span> and <span className="recommendation-highlight">code reviews</span>.</p>
      </div>
    )
  },
  recommendationThreeDescription(){
    return (
      <div>
        <p>Allocated work <span className="recommendation-highlight">time to learn</span> all the things.</p>
      </div>
    )
  },

  render(){
    var recommendationOneDescription = this.recommendationOneDescription();
    var recommendationTwoDescription = this.recommendationTwoDescription();
    var recommendationThreeDescription = this.recommendationThreeDescription();

    return (
      <div className="recommendations-container">
        <div className="recommendations-heading">
          <h2>Recommendations</h2>
        </div>
        <Recommendation description={recommendationOneDescription}/>
        <Recommendation description={recommendationTwoDescription}/>
        <Recommendation description={recommendationThreeDescription}/>
      </div>
    )
  }
});

module.exports = Recommendations;