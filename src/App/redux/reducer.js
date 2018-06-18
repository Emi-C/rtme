import actions from 'reduxUtils/actions';

const appActions = actions.APP;

const initialState = {
  fbInit: false,
  userId: '',
  accessToken: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case appActions.BOOTSTRAP_SUCCESS.type: //success of behaviour saga
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
