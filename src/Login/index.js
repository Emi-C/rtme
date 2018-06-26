import { connect } from 'react-redux';
import actions from 'reduxUtils/actions';
import Login from './template';

const loginActions = actions.LOGIN;
const mapDispatchToProps = (dispatch) => ({
  bootstrap: () => dispatch(loginActions.BOOTSTRAP.create()),
  fbLogin: () => dispatch(loginActions.FBLOGIN.create()),
});

const mapStateToProps = (state) => ({
  userId: state.app.userId,
  accessToken: state.app.accessToken,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
