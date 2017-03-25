import React from 'react';

export default function MultiOptionAnswer(props) {
  const question = props.question.question;
  const options = props.question.options;
  const answer = props.whenAnswered;
  const handleSubmit = props.handleSubmit;
  return (
    <form onSubmit={handleSubmit}>
      <h3>{question}</h3>
      {
        options.map((option, index) => {
          return (
            <label key={index} >{option}
              <input type='checkbox' name='option' value={option} onChange={answer} /><br/>
            </label>
          );
        })
      }
      <input type='submit' value='Next'/>
    </form>
  );
}
