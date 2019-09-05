export const answerReducer = ( state = [], action ) => {
  switch (action.type) {
    case 'STASH_ANSWER':
      return {
        question: action.answer.question,
        answer: action.answer.answer,
        pointValue: action.answer.pointValue
      }
    default:
      return state;
  }
}