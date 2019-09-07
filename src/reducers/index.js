import { combineReducers } from 'redux';
import { answerReducer } from './answerReducer';
import { clueReducer } from './clueReducer';

const rootReducer = combineReducers({
  answer: answerReducer,
  clues: clueReducer
});

export default rootReducer;