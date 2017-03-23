import Main from './components/main/main';
import Question from './components/questions/question';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: ['Arabic', 'English', 'فارسى' ],
      questions: [
        {
          question:'question1',
          answers: ['answer1.1', 'answer1.2', 'answer1.3']
        },
        {
          question:'question2',
          answers: ['answer2.1', 'answer2.2', 'answer2.3']
        },
        {
          question:'question3',
          answers: ['answer3.1', 'answer3.2', 'answer3.3']
        }
      ],
      answers: []
    }
  }

  handleButton(e) {
    console.log(e.type);
  }

  handleCheckBox = (question, answer, e) => {
    console.log(e) // to show the current outcomes
    // create new object
    const answers = {}
    // setting questions and answer props
    answers.question = question;
    answers.answer = answer;
    // create new Array, set it to the prevouse state and push object to it
    const newAnswer = this.state.answers;
    newAnswer.push(answers);
    console.log(answers); // to show the current outcomes
    // set the state
    this.setState({answers: newAnswer})
    console.log(this.state.answers);// to show the outcomes
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Refugee Match</h2>
        </div>

        <Main language={this.state.languages}/>
        <Question questions={this.state.questions } handleCheckBox={this.handleCheckBox} />

          <input type="button" onClick={this.handleButton}></input>
          <input type="button" onClick={this.handleButton}></input>

      </div>
    );
  }

}
