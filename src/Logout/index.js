import { connect } from 'react-redux';
import actions from 'reduxUtils/actions';
import Logout from './template';

const logoutActions = actions.LOGOUT;
const mapDispatchToProps = (dispatch) => ({
  fbLogout: () => dispatch(logoutActions.FBLOGOUT.create()),
});

export default connect(
  null,
  mapDispatchToProps
)(Logout);
