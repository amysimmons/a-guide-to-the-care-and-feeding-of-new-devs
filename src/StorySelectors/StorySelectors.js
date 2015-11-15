import React from 'react';
require("./StorySelectors.css");

var Selector = React.createClass({
	handleClick(e){
		this.props.selectStory(this.props.story);
	},

	render(){
		return (
			<span onClick={this.handleClick}>
				<i className="fa fa-user"></i>
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
      <div className="story-selectors-container">
      	{selectors}
      </div>
    )
  }
});

module.exports = StorySelectors;