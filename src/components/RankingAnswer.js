import React, { Component } from 'react';

export default class RankingAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question.question,
      options: this.props.question.options,
      handleSubmit: this.props.handleSubmit,
      answers: []
      
    }
  }
  onclickHandler = (event) => {
    const handleSubmit = this.state.handleSubmit;
    let answers = this.state.answers;
    let options = this.state.options;
    const objectValue = {
      answerId: event.target.id,
      answer: event.target.value
    }
    answers.push(objectValue);
    options = options.filter(value => value.answerId !== objectValue.answerId);
    if (options.length < 1) {
      handleSubmit(answers);
      return;
    }
    this.setState({answers: answers, options: options})
  }
  displayRender = () => {
    const options = this.state.options;
    return (
      <div>
        {
          options.map((answer, index) => {
            return (
              <input
                className='rankQuestion'
                key={index}
                id={answer.answerId}
                type='button'
                value={answer.answer}
                onClick={this.onclickHandler} />
            );
          })
        }
      </div>
    );
  }
  render() {
    const question = this.state.question;
    return (
      <form>
      <h3>{question}</h3>
      {
        this.displayRender()
      }
      </form>
    );
  }
}
