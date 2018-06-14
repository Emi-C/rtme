const authHandler = () => {
  window.fbAsyncInit = function() {
    window.FB.init({
      appId: '277343862765502',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.0',
    });
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
};

export default authHandler;
