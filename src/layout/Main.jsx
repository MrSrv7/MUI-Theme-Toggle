import { useTheme } from "@emotion/react";
import { Card, CardContent } from "@mui/material";
import Router from "../Router";

const Main = () => {
  const theme = useTheme();

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.mode === "dark" ? "#222" : "#FFF",
        minHeight: "90vh",
      }}
    >
      <Card
        sx={{
          marginBottom: "128px",
        }}
      >
        <CardContent
          sx={{
            width: 505,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Router />
        </CardContent>
      </Card>
    </section>
  );
};

export default Main;
