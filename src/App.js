import React, { Component } from 'react';
import './App.css';
import Languages from './components/Languages';
import Question from './components/Question';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // this state is just for displaying the outcomes (depend on the databases)
      languagesList: ['English','Arabic','Francais'],
      questions:[
        {
          question: 'Are you a refugee or in a refugee-like situation?',
          options: ['Yes','No','Prefer not to say'],
          questionType: 'single answer'
        },
        {
          question: 'Which of these sectors would you be most likely to look for a job in?',
          options: ['Administration','Manufacturing','Education','Construction','Retail','Business','Electricity, Gas and Water'],
          questionType: 'multi answer'
        },
        {
          question: 'Would you prefer to live in a city or the countryside?',
          options: ['City','Countryside','I don\'t mind'],
          questionType: 'single answer'
        }
      ],
      // for pushing the ansers
      answers: [],
      // to display each question at one time
      questionNumber: -1,
      // this is the current answer in the current page (in case if the quetion is MultiOptionQuestion)  :)
      tempAnswer: [],
    }
  }

  // this is to make an object of multi option
  multiAnswer = (event) => {
    const eventValue = event.target.value;
    let tempAnswer = this.state.tempAnswer
    // delete unchecked value from the list
    const index = tempAnswer.indexOf(eventValue);
    index === -1 ? tempAnswer.push(eventValue):tempAnswer.splice(index,1);
    // you can use this one as well
    // const checked = event.target.checked;
    // checked ? tempAnswer.push(eventValue) : tempAnswer.splice(index, 1);
    this.setState({tempAnswer: tempAnswer});
    // event.preventDefault();
  }

  // for the language button, checkbox and radiobox answers
  handleSubmit = (event) => {
    // list of state we have
    const questions = this.state.questions;
    let answers = this.state.answers;
    let tempAnswer = this.state.tempAnswer;
    let questionNumber = this.state.questionNumber;
    // check question number and increment it, if it has a defult value
    if (questionNumber === -1) {
      questionNumber++;
      return this.setState({questionNumber: questionNumber});
    }
    // if it reach to the end of questions
    // set the state to its defaul value
    if (questionNumber === questions.length) {
      // this should be rendering the result page which is in progress
      return (
        this.setState(
          {
            questionNumber: 0,
            answers: [],
          }
        )
      )
    }
    if (questions[questionNumber].questionType === 'single answer') {
      questionNumber++;
      answers.push(event.target.value);
      console.log(questionNumber,'   ',answers);
      this.setState(
        {
          questionNumber: questionNumber,
          answers: answers,
        }
      );
    }else {
      questionNumber++;
      answers.push(tempAnswer);
      console.log(questionNumber,'   ',answers);
      this.setState(
        {
          questionNumber: questionNumber,
          answers: answers,
          tempAnswer: []
        }
      );
    }
  } // this is the end of handleSubmit
  
  // render componenets
  displayRender = () => {
    const questionNumber = this.state.questionNumber;
    const questions = this.state.questions;
    const languagesList = this.state.languagesList;
    if (questionNumber === -1 || questionNumber >= questions.length) {
      return (
        <Languages
        languagesList={languagesList}
        whenClick={this.handleSubmit} />
      );
    }
    return (
      <Question 
      question={questions[questionNumber]} 
      whenAnswered={this.multiAnswer} 
      handleSubmit={this.handleSubmit}/>
    );
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Refugee Match</h2>
        </div>
        <div className="App-container">
          {
            this.displayRender()
          }
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
