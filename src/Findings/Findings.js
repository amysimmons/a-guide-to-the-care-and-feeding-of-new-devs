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
  findingOneVisual(){
    var averageSupportRating = this.calculateAverageSupportRating();
    var starsHighlight = [];
    var starsNoHighlight = [];
    for (var i = 0; i < Math.floor(averageSupportRating); i++) {
      starsHighlight.push(<i key={i} className={"fa fa-star highlight"}></i>)
    };
    for (var x = Math.floor(averageSupportRating); x < 10; x++) {
      starsNoHighlight.push(<i key={x} className={"fa fa-star"}></i>)
    };
    return (
      // <div className="stars">
      //   <div className="highlighted-stars">{starsHighlight}</div>
      //   <div className="non-highlighted-stars">{starsNoHighlight}</div>
      // </div>
      <div>5/10</div>
    )
  },
  findingOneDescription(){
    var averageSupportRating = this.calculateAverageSupportRating();
    return (
      <div>
        <p>how developers rated their level of support in their first 12 months</p>
      </div>
    )
  },
  findingTwoVisual(){
    var betterSupportedPercentage = this.calculatePercentageBetterSupported();    
    return (
      <div>{Math.floor(betterSupportedPercentage).toString()}%</div>
    )
  },

  findingTwoDescription(){
    var averageSupportRating = this.calculateAverageSupportRating();
    return (
      <div>
        <p>of developers said juniors could be better supported in the workplace</p>
      </div>
    )
  },
  findingThreeVisual(){
    return (
      <div></div>
    )
  },

  findingThreeDescription(){
    return (
      <div>
        <p>the top three emotions experienced by junior developers were excited, overwhelmed and frustrated </p>
      </div>
    )
  },
  render(){
    var findingOneVisual = this.findingOneVisual();
    var findingOneDescription = this.findingOneDescription();
    var findingTwoVisual = this.findingTwoVisual();
    var findingTwoDescription = this.findingTwoDescription();
    var findingThreeVisual = this.findingThreeVisual();
    var findingThreeDescription = this.findingThreeDescription();

    return (
      <div className="findings-container">
      	<div className="findings-heading">
          <h2>Findings</h2>
        </div>
        <Finding visual={findingOneVisual} description={findingOneDescription}/>
        <Finding visual={findingTwoVisual} description={findingTwoDescription}/>
        <Finding visual={findingThreeVisual} description={findingThreeDescription}/>
      </div>
    )
  }
});

module.exports = Findings;