import React from 'react';
import PropTypes from 'prop-types';
//import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
  componentDidMount() {
    this.props.fbLogout();
  }

  render() {
    return (
      <div className="Logout">
        <h1>Logging out...</h1>
      </div>
    );
  }
}

Logout.propTypes = {
  // userId: PropTypes.string.isRequired,
  // accessToken: PropTypes.string.isRequired,
  fbLogout: PropTypes.func.isRequired,
};

export default Logout;
