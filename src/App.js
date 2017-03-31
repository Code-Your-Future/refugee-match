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
        // {
        //   question: 'Rank how important these factors are to you',
        //   options: ['Job opportunities','Cost of living','Quality of schools','Level of crime'],
        //   rank: [25, 50, 75, 100],
        //   questionType: 'rank answer'
        // },
        {
          question: 'Is it important for you to access any of these? (tick all that apply)',
          options: ['English teaching','Practical training','University'],
          questionType: 'multi answer'
        },
        {
          question: 'Is it important for you to live near any of these places of worship?',
          options: ['Mosque','Church','Synagogue','Hindu temple','Sikh temple','Buddhist temple','Other'],
          questionType: 'single answer'
        },
        {
          question: 'Which of these sectors would you be most likely to look for a job in?',
          options: ['Administration', 'Manufacturing', 'Education', 'Construction', 'Retail', 'Health and Social work', 'Electricity, Gas and Water', 'Hotel and Restaurant', 'Agriculture', 'Business', 'Other'],
          questionType: 'multi answer'
        },
        // {
        //   question: 'Which of these pictures do you like the most?',
        //   options: ['Countryside.png', 'oldcity.png', 'moderncity.png'],
        //   questionType: 'single photo answer'
        // },
        {
          question: 'Would you prefer to live in a city or the countryside?',
          options: ['City','Countryside','I don\'t mind'],
          questionType: 'single answer'
        },
        {
          question: 'Rank how important these factors are to you',
          options: ['Job opportunities', 'Cost of living', 'Quality of schools', 'Level of crime'],
          questionType: 'ranking answer'
        },
      ],
      // for pushing the ansers
      answers: [],
      // to display each question at one time
      questionNumber: -1,
      // this is the current answer in the current page (in case if the quetion is MultiOptionQuestion)  :)
    }
  }

    // for the language button, checkbox and radiobox answers
  handleSubmit = (answer) => {
    // list of state we have
    const questions = this.state.questions;
    let answers = this.state.answers;
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
      fetch('http://localhost:9000/api', {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        answers: this.state.answers
      })
    })
    // .then((data) => console.log(data.json()))
    // .catch((err) => console.error(err))
      return (
        this.setState(
          {
            questionNumber: 0,
            answers: [],
          }
        )
      )
    }
    questionNumber++;
    answers.push(answer);
    console.log(questionNumber,'   ',answers);
    return (
      this.setState(
        {
          questionNumber: questionNumber,
          answers: answers,
        }
      )
    )
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
