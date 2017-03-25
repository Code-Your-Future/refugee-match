import React from 'react';
import SingleOptionAnswer from './SingleOptionAnswer';
import MultiOptionAnswer from './MultiOptionAnswer';

export default function Question(props) {
  const question = props.question;
  const questionType = props.question.questionType;
  const multiAnswer = props.whenAnswered;
  const handleSubmit = props.handleSubmit;
  return (
    <div>
      {
        questionType === 'single answer' ?
        <SingleOptionAnswer
          question={question}
          whenAnswered={handleSubmit} />
        : 
        <MultiOptionAnswer
          question={question}
          whenAnswered={multiAnswer}
          handleSubmit={handleSubmit} />
      }
    </div>
  );
}
