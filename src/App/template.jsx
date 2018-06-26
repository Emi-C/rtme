import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'router';

class App extends React.Component {
  componentDidMount() {
    this.props.bootstrap();
  }

  render() {
    return this.props.fbInit ? (
      <BrowserRouter>
        <AppRouter userId={this.props.userId} />
      </BrowserRouter>
    ) : (
      <p>loading...</p>
    );
  }
}

App.propTypes = {
  fbInit: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  bootstrap: PropTypes.func.isRequired,
};

export default App;
