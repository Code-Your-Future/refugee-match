import React from 'react';

let tempAnswer = '';

function answerChecking() {
  return tempAnswer === '';
}

function answer() {
  let value = tempAnswer;
  tempAnswer = '';
  return value;
}

export default function SingleOptionAnswer(props) {
  const question = props.question.question;
  const options = props.question.options;
  const handleSubmit = props.handleSubmit;
  return (
    <form>
      <h3>{question}</h3>
      {
        options.map((option, index) => {
          return (
            <label htmlFor={index} key={index} >{option}
              <input type='radio' name='option' value={option} id={index} onChange={event => tempAnswer = event.target.value} /><br/>
            </label>
          );
        })
      }
      <input type='button' value='Back' onClick={() => console.log('some thing to do')} />
      <input type='button' value='Next' onClick={() => {answerChecking() ? alert('No answer provided'):handleSubmit(answer())}} />
    </form>
  );
}
