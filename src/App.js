import React, { Component } from 'react';
import './App.css';
import Languages from './components/Languages';
import SingleOptionQuestion from './components/SingleOptionQuestion';
import MultiOptionQuestion from './components/MultiOptionQuestion';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      answers: [],
      questionNumber: -1,
      tempAnswer: [],
    }
  }
  answer = (event) => {
    let tempAnswer = this.state.tempAnswer;
    tempAnswer.push(event.target.value);
    console.log(event.target.value);
    event.target.value = null;
    this.setState({tempAnswer: tempAnswer});
    // event.preventDefault();
  }
  handleSubmit = (event) => {
    console.log(event.target.value);
    const questions = this.state.questions;
    const languagesList = this.state.languagesList;
    let answers = this.state.answers;
    let tempAnswer = this.state.tempAnswer;
    let questionNumber = this.state.questionNumber;
    if (questionNumber === -1) {
      questionNumber++;
      return this.setState({questionNumber: questionNumber});
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
  }
  displayRender = () => {
    const questionNumber = this.state.questionNumber;
    const questions = this.state.questions;
    const languagesList = this.state.languagesList;
    if (questionNumber === -1) {
      return (
        <Languages
        languagesList={languagesList}
        whenClick={this.handleSubmit} />
      );
    }
    switch (questions[questionNumber].questionType) {
      case 'single answer': 
        return (
          <SingleOptionQuestion
          question={questions[questionNumber]}
          whenAnswered={this.handleSubmit} />
        );
      break;
      case 'multi answer': 
        return (
          <MultiOptionQuestion
          question={questions[questionNumber]}
          whenAnswered={this.answer}
          handleSubmit={this.handleSubmit} />
        );
      default:
      break;
    }
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
