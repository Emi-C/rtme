const authInit = () => {
  return new Promise((resolve) => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: '277343862765502',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.0',
      });
      resolve();
    };
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });
};

const authCheck = () => {
  return new Promise((resolve, reject) => {
    window.FB.getLoginStatus(
      (response) =>
        response.status === 'connected' ? resolve(response) : reject('User not logged')
    );
  });
};

const authLogin = () => {
  return new Promise((resolve, reject) => {
    window.FB.login((response) => {
      if (response.authResponse) {
        resolve(response.authResponse);
      } else {
        reject('login failed');
      }
    });
  });
};

const authLogout = () => {
  return new Promise((resolve) => {
    window.FB.logout((response) => resolve(response));
  });
};

export { authInit, authCheck, authLogin, authLogout };
