import React from 'react';
import SingleOptionAnswer from './SingleOptionAnswer';
import MultiOptionAnswer from './MultiOptionAnswer';
import RankingAnswer from './RankingAnswer';
import PictureAnswer from './PictureAnswer';

export default function Question(props) {
  const question = props.question;
  const questionType = props.question.questionType;
  const handleSubmit = props.handleSubmit;
  const handlePrevious = props.handlePrevious;
  switch (questionType) {
    // import then add case to add option
    case 'single answer':
      return (
        <SingleOptionAnswer
          question={question}
          handleSubmit={handleSubmit}
          handlePrevious={handlePrevious} />
      );
    case 'multi answer':
      return(
        <MultiOptionAnswer
          question={question}
          handleSubmit={handleSubmit} 
          handlePrevious={handlePrevious} />
      );
    case 'ranking answer':
      return (
        <RankingAnswer
          question={question}
          handleSubmit={handleSubmit} 
          handlePrevious={handlePrevious} />
      );
      case 'picture answer':
      return (
        <PictureAnswer
          question={question}
          handleSubmit={handleSubmit} 
          handlePrevious={handlePrevious} />
      );
    default:
    break;
  }
}
