import { Action } from 'redux';
import { DROP_CHECKER, ACTIVE_CHECKER } from '../actions/connectFour';

const initialState = {
  board: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  activeColumn: {
    column: 0,
    player: 0
  }
};

export default function connectFour(
  state = initialState,
  action: Action<string>
) {
  switch (action.type) {
    case DROP_CHECKER:
      if (state.board[action.payload.column][6] === 6) {
        return state;
      }
      // eslint-disable-next-line no-case-declarations
      const result = JSON.parse(JSON.stringify(state.board));

      result[action.payload.column][result[action.payload.column][6]] =
        action.payload.player;
      result[action.payload.column][6] += 1;
      return { ...state, board: result };
    case ACTIVE_CHECKER:
      return {
        ...state,
        activeColumn: {
          column: action.payload.column,
          player: action.payload.player
        }
      };
    default:
      return state;
  }
}
