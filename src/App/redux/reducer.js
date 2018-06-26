import actions from 'reduxUtils/actions';

const appActions = actions.APP;
const logoutActions = actions.LOGOUT;

const initialState = {
  fbInit: false,
  userId: '',
  accessToken: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case appActions.AUTH_INIT_REQUEST_SUCCESS.type:
      return { ...state, ...action.payload };
    case appActions.AUTH_CHECK_REQUEST_SUCCESS.type:
      return { ...state, ...action.payload };
    case logoutActions.FBLOGOUT_SUCCESS.type:
      return {
        ...state,
        userId: '',
        accessToken: '',
      };
    default:
      return state;
  }
};
