// eslint-disable-next-line import/no-unresolved
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import ConnectFour from '../components/ConnectFour';
import { dropChecker } from '../actions/connectFour';
import { StateShape } from '../reducers/types';

function mapStateToProps(state: StateShape) {
  return {
    board: state.connectFour.board,
    activeColumn: state.connectFour.activeColumn
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      dropChecker
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectFour);
