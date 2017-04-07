import React from 'react';

let tempAnswer = {
      answerId: null,
      answer: null,
      answerValue: 0
    };

function answerChecking() {
  return (tempAnswer.answerId === null);
}

function collectingAnswer(event) {
  tempAnswer.answer = event.target.value;
  tempAnswer.answerId = event.target.id;
  tempAnswer.answerValue = 1;
}

function answer() {
  let value = tempAnswer;
  tempAnswer = {
    answerId: null,
    answer: null,
    answerValue: 0
  };
  return value;
}

function resetValues() {
  tempAnswer = {
    answerId: null,
    answer: null,
    answerValue: 0
  };
}

export default function PictureAnswer(props) {
  const question = props.question.question;
  const options = props.question.options;
  const handleSubmit = props.handleSubmit;
  return (
    <form>
      <h3>{question}</h3>
      {
        options.map((answer, index) => {
          return (
            <label className='picLabel' htmlFor={answer.answerId} key={index} >
                <input
                  className='pictureQuestion'
                  type='radio'
                  name='answer'
                  value={answer.answer}
                  id={answer.answerId}
                  onChange={collectingAnswer} />
                <img className='picAnswer' src={require(`../images/${answer.answer}.png`)} alt={answer.answer} />
            </label>

          );
        })
      }
      <input
        type='button'
        value='Previous'
        className = 'prevBtn'
        onClick={() => handlePrevious(resetValues())} />
      <input
        type='button'
        value='Next'
        className = 'nextBtn'
        onClick={() => {answerChecking() ? alert('Please choose one picture'):handleSubmit(answer())}} />
    </form>
  );
}

