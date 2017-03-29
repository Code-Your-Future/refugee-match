import React from 'react';

let tempAnswers = [];

function collectingAnswer(event) {
  const eventValue = event.target.value;
  const index = tempAnswers.indexOf(eventValue);
  index === -1 ? tempAnswers.push(eventValue):tempAnswers.splice(index,1);
  // you can use this one as well
  // const checked = event.target.checked;
  // checked ? tempAnswers.push(eventValue) : tempAnswers.splice(index, 1);
  console.log(tempAnswers);
  // event.preventDefault();
}

function answerChecking() {
  return tempAnswers.length < 1;
}

function answers() {
  let value = tempAnswers;
  tempAnswers = [];
  return value; 
}

export default function MultiOptionAnswer(props) {
  const question = props.question.question;
  const options = props.question.options;
  const handleSubmit = props.handleSubmit;
  return (
    <form>
      <h3>{question}</h3>
      {
        options.map((option, index) => {
          return (
            <label key={index} >{option}
              <input type='checkbox' name='option' value={option} onChange={collectingAnswer} /><br/>
            </label>
          );
        })
      }
      <input type='button' value='Back' onClick={() => console.log('some thing to do')} />
      <input type='button' value='Next' onClick={() => {answerChecking() ? alert('No answer provided'):handleSubmit(answers())}} />
    </form>
  );
}
