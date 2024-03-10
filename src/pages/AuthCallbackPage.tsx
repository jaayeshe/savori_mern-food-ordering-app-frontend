import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false);
  //the useRef stores
  //a state value whenever a state changes that doesn't trigger the component to  re-render
  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/"); //this / will take us back to the homepage
  }, [createUser, navigate, user]); //to make sure the useEffect runs only once
  return <>Loading...</>;
};

export default AuthCallbackPage;

//this the the page that the user will be redirected to
