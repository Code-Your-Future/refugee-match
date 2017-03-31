import React from 'react';
import SingleOptionAnswer from './SingleOptionAnswer';
import MultiOptionAnswer from './MultiOptionAnswer';

export default function Question(props) {
  const question = props.question;
  const questionType = props.question.questionType;
  const handleSubmit = props.handleSubmit;
  switch (questionType) {
    // import then add case to add option
    case 'single answer':
      return (
        <SingleOptionAnswer
          question={question}
          handleSubmit={handleSubmit} />
      );
    case 'multi answer':
      return(
        <MultiOptionAnswer
          question={question}
          handleSubmit={handleSubmit} />
      );
    default:
    break;
  }
}
