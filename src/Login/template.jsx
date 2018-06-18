import React from 'react';

class Login extends React.Component {
  fbLogin = () => {
    window.FB.login((response) => {
      if (response.authResponse) {
        window.FB.api('/me', (responseApi) => {
          console.log(`Good to see you, ${responseApi.name}.`);
        });
      } else {
        console.log('do nothing');
      }
    });
  };

  // fbLogout = () => {
  //   window.FB.logout((response) => {
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
