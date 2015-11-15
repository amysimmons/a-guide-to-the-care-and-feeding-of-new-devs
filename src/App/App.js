import React from 'react';
import Header from '../Header/Header';
import Recommendations from '../Recommendations/Recommendations'
import Findings from '../Findings/Findings'
import StorySelectors from '../StorySelectors/StorySelectors'
import Footer from '../Footer/Footer';
require("./App.css");

var App = React.createClass({
  getInitialState(){
    let	storyData = this.loadData();
    let selectedStory = null;
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
  selectStory(selectedStory){
  	console.log(selectedStory)
  	var selectedStory = selectedStory;
  	this.setState({selectedStory:selectedStory})
  },
  render(){
  	var storyData = this.state.storyData;
  	var selectedStory = this.state.selectedStory;
  	var selectedStories = this.state.selectedStories;
  	var selectStory = this.selectStory;

    return (
      <div className="app-container">
      	<Header/>
        <Findings/>
        <Recommendations/>
      	<StorySelectors 
      		storyData={storyData}
      		selectedStory={selectedStory}
      		selectedStories={selectedStories}
      		selectStory={selectStory}/>
      	<Footer/>
      </div>
    )
  }
});

module.exports = App;