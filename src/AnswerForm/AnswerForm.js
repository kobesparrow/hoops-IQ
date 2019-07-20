import React from 'react';

const AnswerForm = ({question, pointValue}) => {

  return (
    <article className='answer-form'>
      <p>{question}</p>
      <p>{pointValue}</p>
      <form>
        <input
          type='text'
          placeholder='input guess'
        />
        <button>Guess</button>
      </form>
    </article>
  )
}

export default AnswerForm;