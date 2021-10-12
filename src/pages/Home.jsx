import { Button, Typography } from "@mui/material";
import useHistory from "../hooks/useHistory";

const Home = () => {
  const routeChange = useHistory("/profile");
  return (
    <Typography variant="p" color="secondary">
      A Simple MUI and RTK (Redux Toolkit) template showing how to implement
      theme switching in a React App. This is just like a simple example /
      template that shows the flow / way I made. You can modify as you require.
      You can even have more than 2 themes like an unique theme for Profile / My
      Account page, an unique theme for Dashboard page etc., <br />
      (Example :
      <Button
        variant="contained"
        color="info"
        onClick={routeChange}
      >
        Click here
      </Button>
      to go to Profile page)
    </Typography>
  );
};

export default Home;
