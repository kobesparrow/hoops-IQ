export const clueReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_CLUES':
      return action.clues
    default:
      return state;
  }
}