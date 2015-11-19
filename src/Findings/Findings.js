import React from 'react';
require("./Findings.css");

var Finding = React.createClass({
  render(){
    return (
      <div className="finding">
      	<span className="description">{this.props.description}</span>
      </div>
    )
  }
});

var Findings = React.createClass({
  calculateAverageSupportRating(){
    var ratings = [];
    var storyData = this.props.storyData;

    for (var i = 0; i < storyData.length; i++) {
      var story = storyData[i];
      var rating = story["How would you rate the support that you received in your first 12 months as a developer?"];
      ratings.push(rating);
    };

    var sum = 0;
    for( var i = 0; i < ratings.length; i++ ){
        sum += ratings[i]; 
    }

    var avg = sum/ratings.length;
    return avg.toFixed(2);
  },
  calculatePercentageBetterSupported(){
    var storyData = this.props.storyData;
    var yesResponses = 0;

    for (var i = 0; i < storyData.length; i++) {
      var story = storyData[i];
      var betterSupport = story["Could junior developers be better supported in the workplace?"];
      if (betterSupport == "Yes"){
        yesResponses++;
      }
    };

    var percentage = (yesResponses/storyData.length)*100
    return percentage.toFixed(2);
  },
  findingOneDescription(){
    var betterSupportedPercentage = this.calculatePercentageBetterSupported();    
    return (
      <div>
        <p><span className="finding-highlight">{Math.floor(betterSupportedPercentage).toString()}% </span>of developers who responded said juniors could be better supported.</p>
      </div>
    )
  },
  findingTwoDescription(){
    var averageSupportRating = this.calculateAverageSupportRating();
    return (
      <div>
        <p>On average, developers rated the level of support they received as a junior as <span className="finding-highlight">{Math.floor(averageSupportRating)}/10.</span></p>
      </div>
    )
  },
  findingThreeDescription(){
    return (
      <div>
        <p><span className="finding-highlight">Excited</span>, <span className="finding-highlight">overwhelmed</span>, <span className="finding-highlight">frustrated</span> and <span className="finding-highlight">fear</span> were the top four emotions felt by junior developers.</p>
      </div>
    )
  },
  render(){
    var findingOneDescription = this.findingOneDescription();
    var findingTwoDescription = this.findingTwoDescription();
    var findingThreeDescription = this.findingThreeDescription();

    return (
      <div className="findings-container">
      	<div className="findings-heading">
          <h2>Findings</h2>
        </div>
        <Finding description={findingOneDescription}/>
        <Finding description={findingTwoDescription}/>
        <Finding description={findingThreeDescription}/>
      </div>
    )
  }
});

module.exports = Findings;