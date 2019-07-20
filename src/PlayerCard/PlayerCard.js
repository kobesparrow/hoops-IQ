import React from 'react';

const PlayerCard = ({name, score}) => {

  return (
    <article className='player-card'>
      <p>{name}</p>
      <p>Score: {score} </p>
    </article>
  )
}

export default PlayerCard;