import React from "react";
import { connect } from "react-redux";
import Signin from "../components/Signin";
import { signin, signout } from "../modules/login";

const SignInContainer = ({ token, authenticated,signin , signout}) => {
  return (
    <div>
      <Signin token={token} onSignIn={signin} />
    </div>
  );
};

export default connect(
  ({ setToken }) => ({
    token: setToken.token,
    authenticated: setToken.authenticated,
  }),
  { signin, signout }
)(SignInContainer);
