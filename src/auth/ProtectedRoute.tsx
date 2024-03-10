import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;

//this component is going to run some logic to,
//if the user is logged in, if they are then
//we will allow them through to the protected
//routes that they are trying to access
//if not, we will redirect them back to the homepage.

//Outlet: render all the child routes of the component..
//..if the user is authenticated.
