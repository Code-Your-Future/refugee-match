import React from 'react';
import SingleOptionQuestion from './SingleOptionQuestion';
import MultiOptionQuestion from './MultiOptionQuestion';

export default function Question(props) {
  const question = props.question;
  const questionType = props.question.questionType;
  const multiAnswer = props.whenAnswered;
  const handleSubmit = props.handleSubmit;
  return (
    <div>
      {
        questionType === 'single answer' ?
        <SingleOptionQuestion question={question} whenAnswered={handleSubmit} /> : 
        <MultiOptionQuestion
          question={question}
          whenAnswered={multiAnswer}
          handleSubmit={handleSubmit} />
      }
    </div>
  );
}
