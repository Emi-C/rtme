import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
  }

  fbLogin = () => {
    window.FB.login(function(response) {
      if (response.authResponse) {
        window.FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
        });
      } else {
        console.log('do nothing');
      }
    });
  };

  // fbLogout = () => {
  //   window.FB.logout(function(response) {
  //     console.log(response, ' logout');
  //   });
  // };

  render() {
    return (
      <div className="Login">
        <h1>Login!</h1>
        <button onClick={this.fbLogin}>logme</button>
        {/*<button onClick={this.fbLogout}>logmeout</button>*/}
      </div>
    );
  }
}

export default Login;
