import { GetState, Dispatch } from '../reducers/types';

export const DROP_CHECKER = 'DROP_CHECKER';

export function dropChecker(col: number) {
  return {
    type: DROP_CHECKER
  };
}
