import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type StateShape = {
  counter: number;
  connectFour: {
    board: number[][];
    activeColumn: {
      column: number;
      player: number;
    };
  };
};

export type GetState = () => StateShape;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<StateShape, Action<string>>;
