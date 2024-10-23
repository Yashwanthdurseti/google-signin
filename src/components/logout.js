import { GoogleLogout } from 'react-google-login';

const clientId = "499337774046-vlmm1uadrvcgi2vgocrpac200hdn57nl.apps.googleusercontent.com";

function Logout({ onLogout }) {
  const onSuccess = () => {
    onLogout();
    console.log("Logout successful");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
