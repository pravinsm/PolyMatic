import React, { useRef } from "react";
import FormMUI from "./FormMUI";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#6b6295",
      main: "#473b7b",
      dark: "#312956",
      contrastText: "#fff",
    },
    secondary: {
      dark: "#255c74",
      main: "#3584a7",
      light: "#5d9cb8",
      contrastText: "#fff",
    },
    third: {
      light: "#59dbcb",
      main: "#30d2be",
      dark: "#219385",
      contrastText: "#fff",
    },
  },
});

const useStyles = makeStyles({
  container: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
  },
});

const fillUpBtn = {
  background: "linear-gradient(90deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "100px",
  border: "none",
  color: "white",
  padding: "10px 20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  cursor: "pointer",
  zIndex: "1",
  fontWeight: "bold",
  fontSize: "20px",
};
function App() {
  const formRef = useRef(null);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <button
          style={fillUpBtn}
          onClick={() => {
            formRef.current.style.display = "flex";
          }}
        >
          Fill Up Form
        </button>
        <FormMUI formRef={formRef} />
      </div>
    </ThemeProvider>
  );
}

export default App;
