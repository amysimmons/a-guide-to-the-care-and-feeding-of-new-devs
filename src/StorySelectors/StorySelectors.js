import React from 'react';
import Story from '../Story/Story'
require("./StorySelectors.css");

var Selector = React.createClass({
	handleClick(e){
		this.props.selectStory(this.props.story);
	},
	setSelectorIconClasses(){
		var userIconClasses = "";
		switch(this.props.story["Gender"]){
			case "M":
        		userIconClasses += "fa fa-male ";
        		break;
    		case "F":
        		userIconClasses += "fa fa-female ";
        		break;
    		default:
        		userIconClasses += "fa fa-user ";
		}

		if(this.props.story["selected"]){
			userIconClasses += "selected";
		}
		return userIconClasses;	
	},
	render(){
		return (
			<span onClick={this.handleClick}>
				<i className={this.setSelectorIconClasses()}></i>
			</span>
		)
	}
});

var StorySelectors = React.createClass({
	render(){
		var storyData = this.props.storyData;
		var selectors = [];
		for (var i = 0; i < storyData.length; i++) {
			var story = storyData[i];
	  	selectors.push(
	  		<Selector 
	  			key={i} 
	  			story={story} 
	  			value={i}
	  			selectStory={this.props.selectStory}/>
	  	)
	};
    return (
      <div className="stories-container">
        <div className="stories-heading">
          <h2>Stories</h2>
        </div>
      	<div className="story-selectors-container">
      		{selectors}
      	</div>
      	<div className="unread-story-count">{this.props.storyData.length - this.props.selectedStories} unread stories</div>
      	<Story
      	storyData={this.props.storyData}
      	selectedStory={this.props.selectedStory}
      	selectedStories={this.props.selectedStories}/>
      </div>
    )
  }
});

module.exports = StorySelectors;