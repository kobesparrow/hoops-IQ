import React from 'react';

const AnswerForm = ({question, pointValue}) => {

  return (
    <article className='answer-form'>
      <p>{question}</p>
      <p>{pointValue}</p>
    </article>
  )
}

export default AnswerForm;