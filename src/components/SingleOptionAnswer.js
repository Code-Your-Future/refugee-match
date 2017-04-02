import React from 'react';

let tempAnswer = '';

function answerChecking() {
  return (tempAnswer === '');
}

function collectingAnswer(event) {
  if (event.target.value === 'Other') {
    tempAnswer = '';
    return ;
  }
  tempAnswer = event.target.value;
}

function answer() {
  let value = tempAnswer;
  tempAnswer = '';
  return value;
}

function collectingTextAreaValue(event) {
  tempAnswer = event.target.value;
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
        options.map((option, index) => {
          return (
            option !== 'Other' ?
            <label htmlFor={index} key={index} >
              <input type='radio' name='option' value={option} id={index} onChange={collectingAnswer} />{option}<br/>
            </label>
            :
            <label htmlFor={index} key={index} >
              <input type='radio' name='option' value={option} id={index} onChange={collectingAnswer} />{option}<br/>
              <textarea defaultValue='Please specify:' onChange={collectingTextAreaValue} /><br/>
            </label>
          );
        })
      }
      <input type='button' value='Previous' onClick={() => console.log('some thing to do')} />
      <input type='button' value='Next' onClick={() => {answerChecking() ? alert('Please check \'Other\' value'):handleSubmit(answer())}} />
    </form>
  );
}
