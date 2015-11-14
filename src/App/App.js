import React from 'react';
import Header from '../Header/Header';
import StorySelectors from '../StorySelectors/StorySelectors'
import Story from '../Story/Story'
import Footer from '../Footer/Footer';
import request from 'superagent';
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

	var data = require('dsv-file!./data.csv');
	// => should return data.csv content as json file 

	console.log(data);
	//returns an empty object
  },

  render(){
  	var storyData = this.state.storyData
  	var	selectedStory = this.state.selectedStory
  	var	selectedStories = this.state.selectedStories

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