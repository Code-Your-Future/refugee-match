import React from 'react';

let tempAnswers = [];
let textAreaValue = null;

function collectingAnswer(event) {
  const eventValue = event.target.value;
  const eventId = event.target.id;
  const checked = event.target.checked;
  if (checked) { 
    tempAnswers.push({answerId: eventId, answer: eventValue});
  }else {
    tempAnswers = tempAnswers.filter(value => value.answerId !== eventId);
  }
}

function collectingTextAreaValue(event) {
  textAreaValue = event.target.value;
}

function answerChecking() {
  return tempAnswers.length < 1;
}

function answers() {
  if (textAreaValue !== null) {
    tempAnswers.map(answer => {
      if (answer.answer === 'Other') {
        answer.answer = textAreaValue;
      }
      return answer;
    });
  }
  let value = tempAnswers;
  tempAnswers = [];
  textAreaValue = null;
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
        options.map((answer, index) => {
          return (
            answer.answer !== 'Other' ? (        
              <label key={index} >
                <input
                  type='checkbox'
                  name='option'
                  value={answer.answer}
                  id={answer.answerId}
                  onChange={collectingAnswer} />
                {answer.answer}
                <br/>
              </label>
              ) : (
              <label key={index} >
                <input
                  type='checkbox'
                  name='option'
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
        value='Back'
        onClick={() => console.log('some thing to do')} />
      <input
        type='button'
        value='Next'
        onClick={() => {answerChecking() ? alert('Please choose answer') : handleSubmit(answers())}} />
    </form>
  );
}

/*
import React from 'react';

let tempAnswers = [];
let textAreaValue = '';
let textAreaValueRequired = false;


function collectingAnswer(event) {
  const eventValue = event.target.value;
  if (eventValue === 'Other') {
    textAreaValueRequired = !(textAreaValueRequired);
    return ;
  }
  const index = tempAnswers.indexOf(eventValue);
  index === -1 ? tempAnswers.push(eventValue) : tempAnswers.splice(index,1);
  // you can use this one as well
  // const checked = event.target.checked;
  // checked ? tempAnswers.push(eventValue) : tempAnswers.splice(index, 1);
  console.log(tempAnswers);
  // event.preventDefault();
}

function collectingTextAreaValue(event) {
  textAreaValue = event.target.value;
  console.log(textAreaValue);
}

function answerChecking() {
  if (tempAnswers.length < 1) {
    return true;
  }else if (textAreaValueRequired) {
      return (textAreaValue === '');
  }
}

function answers() {
  if (textAreaValue) {
    tempAnswers.push(textAreaValue);
  }
  let value = tempAnswers;
  tempAnswers = [];
  textAreaValue = '';
  textAreaValueRequired = false;
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
            option !== 'Other' ? (        
              <label key={index} >
                <input
                  type='checkbox'
                  name='option'
                  value={option}
                  onChange={collectingAnswer} />
                {option}
                <br/>
              </label>
              ) : (
              <label key={index} >
                <input
                  type='checkbox'
                  name='option'
                  value={option}
                  onChange={collectingAnswer} />
                {option}
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
      <input type='button' value='Back' onClick={() => console.log('some thing to do')} />
      <input type='button' value='Next' onClick={() => {answerChecking() ? alert('No answer provided, please check \'Other\' value'):handleSubmit(answers())}} />
    </form>
  );
}


*/