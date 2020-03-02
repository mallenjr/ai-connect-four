import { GetState, Dispatch } from '../reducers/types';

export const DROP_CHECKER = 'DROP_CHECKER';
export const ACTIVE_CHECKER = 'ACTIVE_CHECKER';

export function dropChecker(col: number, player: number) {
  return {
    type: DROP_CHECKER,
    payload: {
      column: col,
      player
    }
  };
}

export function setActiveChecker(col: number, player: number) {
  return {
    type: ACTIVE_CHECKER,
    payload: {
      column: col,
      player
    }
  };
}
