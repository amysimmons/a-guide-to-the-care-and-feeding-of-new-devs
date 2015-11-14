import React from 'react';
import Header from '../Header/Header';
import StorySelectors from '../StorySelectors/StorySelectors'
import Story from '../Story/Story'
import Footer from '../Footer/Footer';
require("./App.css");

var App = React.createClass({
  getInitialState(){
    let storyData,
    	selectedStory,
    	selectedStories

    return{
      storyData: [],
      selectedStory: 0,
      selectedStories: []
    };
  },

  render(){
  	var storyData = this.storyData
  	var	selectedStory = this.selectedStory
  	var	selectedStories = this.selectedStories

    return (
      <div className="app-container">
      	<Header/>
      	<StorySelectors/>
      	<Story/>
      	<Footer/>
      </div>
    )
  }
});

module.exports = App;