import React from 'react';

let tempAnswer = {
      answerId: null,
      answer: null
    };

function answerChecking() {
  return (tempAnswer.answerId === null);
}

function collectingAnswer(event) {
  if (event.target.value === 'Other') {
    tempAnswer.answerId = event.target.id;
    tempAnswer.answer = null;
    return ;
  }
  tempAnswer.answer = event.target.value;
  tempAnswer.answerId = event.target.id;
}

function answer() {
  let value = tempAnswer;
  tempAnswer = {
    answerId: null,
    answer: null
  };
  return value;
}

function collectingTextAreaValue(event) {
  tempAnswer.answer = event.target.value;
  console.log(tempAnswer);
}

export default function SingleOptionAnswer(props) {
  const question = props.question.question;
  const options = props.question.options;
  const handleSubmit = props.handleSubmit;
  return (
    <form>
      <h3>{question}</h3>
      {
        options.map((answer, index) => {
          return (
            answer.answer !== 'Other' ? (
            <label htmlFor={answer.answerId} key={index} >
              <input
                type='radio'
                name='answer'
                value={answer.answer}
                id={answer.answerId}
                onChange={collectingAnswer} />
              {answer.answer}
              <br/>
            </label>
            ) : (
            <label htmlFor={answer.answerId} key={index} >
              <input
                type='radio'
                name='answer'
                value={answer.answer}
                id={answer.answerId}
                onChange={collectingAnswer} />
              {answer.answer}
              <br/>
              <textarea
                defaultValue='Please specify:'
                onChange={collectingTextAreaValue} />
              <br/>
            </label>
            )
          );
        })
      }
      <input
        type='button'
        value='Previous'
        onClick={() => console.log('some thing to do')} />
      <input
        type='button'
        value='Next'
        onClick={() => {answerChecking() ? alert('Please choose answer'):handleSubmit(answer())}} />
    </form>
  );
}
