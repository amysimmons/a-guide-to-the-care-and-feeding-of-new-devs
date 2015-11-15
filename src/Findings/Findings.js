import React from 'react';
require("./Findings.css");

var Finding = React.createClass({
  render(){
    return (
      <div className="finding">
      	<span className="data">{this.props.data}</span>
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
  render(){
    var averageSupportRating = this.calculateAverageSupportRating();
    var betterSupportedPercentage = this.calculatePercentageBetterSupported();

    return (
      <div className="findings-container">
      	<div className="findings-heading">
          <h2>Findings</h2>
        </div>
        <Finding data={averageSupportRating}/>
        <Finding data={betterSupportedPercentage}/>
        <Finding/>
      </div>
    )
  }
});

module.exports = Findings;