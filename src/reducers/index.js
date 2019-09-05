import { combineReducers } from 'redux';
import { answerReducer } from './answerReducer';

const rootReducer = combineReducers({
  answer: answerReducer
});

export default rootReducer;