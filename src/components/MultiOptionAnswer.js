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
            option !== 'Other' ?          
            <label key={index} >
              <input type='checkbox' name='option' value={option} onChange={collectingAnswer} />{option}<br/>
            </label>
            :
            <label key={index} >
              <input type='checkbox' name='option' value={option} onChange={collectingAnswer} />{option}<br/>
              <textarea defaultValue='Please specify:' onChange={collectingTextAreaValue} /><br/>
            </label>
          );
        })
      }
      <input type='button' value='Back' onClick={() => console.log('some thing to do')} />
      <input type='button' value='Next' onClick={() => {answerChecking() ? alert('No answer provided, please check \'Other\' value'):handleSubmit(answers())}} />
    </form>
  );
}
