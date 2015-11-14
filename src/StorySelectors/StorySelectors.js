import React from 'react';
require
require("./StorySelectors.css");
var FontAwesome = require('react-fontawesome');

var Selector = React.createClass({
	handleClick(e){
		this.props.selectStory(this.props.story);
	},

	render(){
		return (
			<span onClick={this.handleClick}>
				{this.props.value}
				<FontAwesome
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
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