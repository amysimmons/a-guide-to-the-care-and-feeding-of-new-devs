import React from 'react';
import Header from '../Header/Header';
import StorySelectors from '../StorySelectors/StorySelectors'
import Story from '../Story/Story'
import Footer from '../Footer/Footer';
require("./App.css");

var App = React.createClass({
  getInitialState(){
    let	storyData = this.loadData();
    let selectedStory = 0;
    let selectedStories = [];

    return{
      storyData: storyData,
      selectedStory: selectedStory,
      selectedStories: selectedStories
    };
  },

  loadData(){
  	return require("json!../Data/stories.json");
  },

  render(){
  	var storyData = this.state.storyData
  	var selectedStory = this.state.selectedStory
  	var selectedStories = this.state.selectedStories

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