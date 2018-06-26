import actions from 'reduxUtils/actions';

const loginActions = actions.LOGIN;
const logoutActions = actions.LOGOUT;

const initialState = {
  userId: '',
  accessToken: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case loginActions.BOOTSTRAP_SUCCESS.type:
      return { ...state, ...action.payload };
    case loginActions.FBLOGIN_SUCCESS.type:
      return { ...state, ...action.payload };
    case logoutActions.FBLOGOUT_SUCCESS.type:
      return initialState;
    default:
      return state;
  }
};
