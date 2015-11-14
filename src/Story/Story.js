import React from 'react';
require("./Story.css");

var Story = React.createClass({

  render(){
  	var story = this.props.selectedStory;
  	var storyData = this.props.storyData;
  	if (story == null) {
  		story = storyData[0];
  	}
  	console.log(story);
  	var YesNoHide = false;
  	var Optional1Hide = false;
  	var Optional2Hide = false;

	if(story["Could junior developers be better supported in the workplace?"] == "No" ){
		YesNoHide = true;
	}
	if(story["Can you recount the worst day of your first 12 months as a developer? What happened, and why was it so bad?"] == "" ){
		Optional1Hide = true;
	}
	if(story["Can you recount the best day of your first 12 months as a developer? What happened, and why was it so good?"] == "" ){
		Optional2Hide = true;
	}

 	var yesNoClasses = "qa-container ";
 	if(YesNoHide){
 		yesNoClasses+='hidden';
 	};

 	var optional1Classes = "qa-container ";
 	if(Optional1Hide){
 		optional1Classes+='hidden';
 	};

 	var optional2Classes = "qa-container ";
 	if(Optional2Hide){
 		optional2Classes+='hidden';
 	};

    return (
      <div className="story-container">
        <div className="qa-container">
      		<span className="question">
      			What city do you work in?
      		</span>
      		<span className="response">
      			{story["What city do you work in?"]}
      		</span>
      	</div>
      	<div className="qa-container">
      		<span className="question">
      			How would you rate the support that you received in your first 12 months as a developer?
      		</span>
      		<span className="response">
      			{story["How would you rate the support that you received in your first 12 months as a developer?"]}
      		</span>
      	</div>
         <div className="qa-container">
      		<span className="question">
      			What three words best describe the emotions you felt in your first 12 months as a developer?
      		</span>
      		<span className="response">
      			{story["What three words best describe the emotions you felt in your first 12 months as a developer?"]}
      		</span>
      	</div>
         <div className="qa-container">
      		<span className="question">
      			Could junior developers be better supported in the workplace?
      		</span>
      		<span className="response">

				{story["Could junior developers be better supported in the workplace?"]}
      		</span>
      	</div>
       	<div className={yesNoClasses}>
      		<span className="question">
      			If you answered yes to the above, how?
      		</span>
      		<span className="response">
      			{story["If you answered yes to the above, how?"]}
      		</span>
      	</div>	
        <div className="qa-container">
      		<span className="question">
      			What one thing would help you progress faster in your first 12 months as a developer?
      		</span>
      		<span className="response">
      			{story["What one thing would help you progress faster in your first 12 months as a developer?"]}
      		</span>
      	</div>
      	<div className="qa-container">
      		<span className="question">
      			What's something technical you are embarrassed to admit you don't know?
      		</span>
      		<span className="response">
      			{story["What\'s something technical you are embarrassed to admit you don\'t know?"]}
      		</span>
      	</div>
      	<div className={optional1Classes}>
      		<span className="question">
      			Can you recount the worst day of your first 12 months as a developer? What happened, and why was it so bad?
      		</span>
      		<span className="response">
      			{story["Can you recount the worst day of your first 12 months as a developer? What happened, and why was it so bad?"]}
      		</span>
      	</div>
        <div className={optional2Classes}>
      		<span className="question">
      			Can you recount the best day of your first 12 months as a developer? What happened, and why was it so good?
      		</span>
      		<span className="response">
      			{story["Can you recount the best day of your first 12 months as a developer? What happened, and why was it so good?"]}
      		</span>
      	</div>
      	<div className="qa-container">
      		<span className="byline">- Responses by a junior developer in {story["What city do you work in?"]} on {story["Timestamp"]}</span>
      	</div>
      </div>	
    )
  }
});

module.exports = Story;