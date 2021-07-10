import React, { useRef } from "react";
import Form from "./Form";

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
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <button
        style={fillUpBtn}
        onClick={() => {
          formRef.current.style.display = "block";
        }}
      >
        Fill Up Form
      </button>
      <Form formRef={formRef} />
    </div>
  );
}

export default App;
