import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  componentDidMount() {
    this.props.bootstrap();
  }

  render() {
    if (this.props.userId && this.props.accessToken) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="Login">
        <h1>Login!</h1>
        <button onClick={this.props.fbLogin}>logme</button>
      </div>
    );
  }
}

Login.propTypes = {
  userId: PropTypes.string.isRequired,
  accessToken: PropTypes.string.isRequired,
  bootstrap: PropTypes.func.isRequired,
  fbLogin: PropTypes.func.isRequired,
};

export default Login;
