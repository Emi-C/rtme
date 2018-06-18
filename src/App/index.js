//connection
import { connect } from 'react-redux';
import actions from 'reduxUtils/actions';
import Main from './template';

const appActions = actions.APP;
const mapDispatchToProps = (dispatch) => ({
  bootstrap: () => dispatch(appActions.BOOTSTRAP.create()),
});

const mapStateToProps = (state) => ({
  fbInit: state.app.fbInit,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
