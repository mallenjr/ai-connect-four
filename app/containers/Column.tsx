// eslint-disable-next-line import/no-unresolved
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { SelectionSurface as selectionSurface } from '../components/Column';
import { dropChecker, setActiveChecker } from '../actions/connectFour';
import { StateShape } from '../reducers/types';

function mapStateToPropsSurface(state: StateShape) {
  return {
    board: state.connectFour.board
  };
}

function mapDispatchToPropsSurface(dispatch: Dispatch) {
  return bindActionCreators(
    {
      dropChecker,
      setActiveChecker
    },
    dispatch
  );
}

// eslint-disable-next-line import/prefer-default-export
export const SelectionSurface = connect(
  mapStateToPropsSurface,
  mapDispatchToPropsSurface
)(selectionSurface);
