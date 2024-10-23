import { GoogleLogin } from 'react-google-login';

const clientId = "499337774046-vlmm1uadrvcgi2vgocrpac200hdn57nl.apps.googleusercontent.com";

function Login({ onSuccess }) {
  const onLoginSuccess = (res) => {
    onSuccess(res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login failed", res);
  };

  return (
    <div id="googlesignin">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onLoginSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
