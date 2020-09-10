import React, { useEffect } from 'react';

const SignIn = (props) => {
  const redirect = props.location.state.redirect;
  const userInfo = true;

  useEffect(() => {
    if (userInfo) props.history.push(`/${redirect}`);
  }, [userInfo]);

  return <div>Login</div>;
};

export default SignIn;
