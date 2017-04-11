import React, { Component } from 'react';
import './App.css';
import Languages from './components/Languages';
import Question from './components/Question';
import Footer from './components/Footer';
import Result from './components/Result';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languagesList: ['English','Arabic','Francais'],
      questions: null,
      answers: [],
      result: null,
      questionNumber: -1,
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
    answers[questionNumber] = answer;
    // if (questionNumber === questions.length-1) {
    //   // this should be rendering the result page which is in progress
    //   this.APIpost('http://localhost:8080/api', answers);
    //   return (
    //     this.setState(
    //       {
    //         result: true,
    //         questionNumber: 0
    //       }
    //     )
    //   )
    // }
    ////////////
    if (questionNumber === questions.length-1) {
      // this should be rendering the result page which is in progress
      this.APIpost('https://refugee-match.herokuapp.com/api', answers)
        .then((resultData) => {
          console.log(resultData);
          this.setState({
            result: resultData,
            questionNumber: 0
          })
        })
      return ;
    }
    questionNumber++;
    console.log(answers);
    return (
      this.setState({
        questionNumber: questionNumber,
        answers: answers,
      })
    )
  } // this is the end of handleSubmit
  APIpost = (url, data) => {
    data = this.changeInToOneArray(data);
    console.log(data);
    return (
      fetch(url, {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        answers: data
        })
      })
      .then((data) => data.json())
      .catch((err) => console.error(err))
    )
  }
  // render componenets
  displayRender = () => {
    const questionNumber = this.state.questionNumber;
    const questions = this.state.questions;
    const languagesList = this.state.languagesList;
    const handleSubmit = this.handleSubmit;
    const changMyAnswer = this.changMyAnswer;
    const handlePrevious = this.handlePrevious;
    const result = this.state.result;
    if (result) {
      return (
        <Result data={result} whenClick={changMyAnswer} />
      );
    }
    if (questionNumber === -1) {
      return (
        <Languages
        languagesList={languagesList}
        whenClick={handleSubmit} />
      );
    }
    return (
      <Question
      question={questions[questionNumber]}
      handleSubmit={handleSubmit}
      handlePrevious={handlePrevious}/>
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
  // function to change the answer's array to contain only object
  changeInToOneArray = (arrayValue) => {
    let arrayOfObject = [];
    arrayValue.map(value => {
      return (
        Array.isArray(value) ? (
          value.forEach(innerArrayValue => arrayOfObject.push(innerArrayValue))
          ) : (
          arrayOfObject.push(value)
        )
      );
    })
    return arrayOfObject;
  }
  handlePrevious = () => {
    let questionNumber = this.state.questionNumber;
    questionNumber--;
    this.setState({
      questionNumber: questionNumber,
    })
  }
  changMyAnswer = () => {
    this.setState({
      questionNumber: 0,
      answers: [],
      result: null
    })
  }
  componentDidMount() {
    this.APIfetch('https://refugee-match.herokuapp.com/api/questions')
      .then(questions => this.setState({ questions: questions }))
  }
  APIfetch = (url) => {
    return (
      fetch(url)
        .then(response => response.json())
        .then(data => data)
    );
  }
}
