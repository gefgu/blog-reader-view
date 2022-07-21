import AuthenticationForm from "./AuthenticationForm";

function AuthenticationPage({isLogIn, setToken}) {
  return <AuthenticationForm isLogIn={isLogIn} setToken={setToken}/>;
}

export default AuthenticationPage;
