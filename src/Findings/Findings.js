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
    var averageSupportRating = this.calculateAverageSupportRating();
    return (
      <div>
        <p>developers rated their level of support in their first 12 months as <span className="finding-highlight">{Math.floor(averageSupportRating)}/10</span></p>
      </div>
    )
  },
  findingTwoDescription(){
    var betterSupportedPercentage = this.calculatePercentageBetterSupported();    
    return (
      <div>
        <p><span className="finding-highlight">{Math.floor(betterSupportedPercentage).toString()}%</span> of developers said juniors could be better supported in the workplace</p>
      </div>
    )
  },
  findingThreeDescription(){
    return (
      <div>
        <p>the top three emotions experienced by junior developers were <span className="finding-highlight">excited, overwhelmed and frustrated</span></p>
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