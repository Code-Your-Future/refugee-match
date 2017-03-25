import React from 'react';

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
              <input type='radio' name='option' value={option} id={index} onChange={(event) => handleSubmit(event.target.value)} /><br/>
            </label>
          );
        })
      }
    </form>
  );
}
