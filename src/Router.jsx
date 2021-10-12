import { useEffect } from "react";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const Router = () => {
  const pathName = useSelector((state) => state.general.currentRoute);
  useEffect(() => {
    const urlName = window.location.pathname
    if (pathName !== urlName) {
      window.history.replaceState("page", '', pathName) // updating the path name with our state value
    }
  });
  const routeHandler = () => {
    if (pathName === "/home") {
      return <Home />;
    }
    if (pathName === "/profile") {
      return <Profile />;
    } else {
      window.location.replace("/home"); // redirect to home page if any other route is entered
    }
  };
  return <>{routeHandler()}</>;
};

export default Router;
