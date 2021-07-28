import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./images/Vector.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";

const options = [
  { value: "Google", label: "Google" },
  { value: "Facebook", label: "Facebook" },
  { value: "Friends & Families", label: "Friends & Families" },
  { value: "Other", label: "Other" },
];

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "none",
    backgroundColor: "#ffffff",
    height: "90vh",
    width: "90vw",
    maxWidth: "960px",
    borderRadius: "15px",
    zIndex: 100,
  },
  leftPart: {
    display: "none",
    flex: "0.4593",
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 51%, ${theme.palette.third.main} 100%)`,
    flexDirection: "column",
    borderRadius: "15px",
    color: "white",
    placeContent: "center",
    placeItems: "center",
    fontWeight: "bold",
    fontFamily: "Lato",

    "& > img": {
      width: "19vw",
    },
    "& > p:nth-of-type(1)": {
      fontFamily: "Poppins",
      fontSize: "4vw",
    },
    "& > p:nth-of-type(2)": {
      fontSize: "1.5vw",
    },

    [theme.breakpoints.up("md")]: {
      "& > img": {
        width: "auto !important",
      },
      "& > p:nth-of-type(1)": {
        fontSize: "55px !important",
      },
      "& > p:nth-of-type(2)": {
        fontSize: "20px !important",
      },
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  rightPart: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    fontFamily: "Lato",
    position: "relative",
    color: "white",
    overflow: "auto",
    "& > p": {
      color: "black",
      textAlign: "center",
      fontSize: "6.5vw",
      marginTop: "45px",
    },
    "& > div p": {
      fontSize: "2vw",
    },
    "& > div form": {
      padding: "10px 37px",
      display: "flex",
      flexDirection: "column",
      placeContent: "space-evenly",
      height: "100%",
    },
    "& > div form p": {
      color: "black",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "4vw",
      marginTop: "15px",
    },
    "& > div form p sup": {
      color: "red",
    },
    "& > div form input": {
      width: "100%",
      margin: "5px 0px",
      border: "2px solid #979797",
      borderRadius: "10px",
      outline: "none",
      padding: "10px",
      "&:focus": {
        border: `2px solid ${theme.palette.secondary.main}`,
      },
    },
    [theme.breakpoints.up("md")]: {
      "& > p": {
        fontSize: "40px !important",
      },
      "& > div form p": {
        fontSize: "22px !important",
      },
      "& > div p": {
        fontSize: "11px !important",
      },
      "& > div form": {
        placeContent: "initial",
        height: "auto",
      },
    },
    [theme.breakpoints.up("sm")]: {
      flex: "0.5407",
      "& > p": {
        fontSize: "3vw",
      },
      "& > div form p": {
        fontSize: "1.8vw",
      },
      "& > div p": {
        fontSize: "1.1vw",
      },
    },
  },
  rightPart_closeBtn: {
    position: "absolute",
    width: "30px",
    height: "30px",
    right: "13px",
    top: "11px",
    fontSize: "28px",
    cursor: "pointer",
    background: theme.palette.secondary.main,
    fontWeight: "bold",
    borderRadius: "50%",
    placeContent: "center",
    display: "flex",
    placeItems: "center",
    "&:hover": {
      background: theme.palette.third.main,
    },
  },
  demoTime: {
    margin: "5px 0px",
    display: "flex",
    "& > button": {
      height: "40px",
      border: "2px solid #979797",
      borderRadius: "10px",
      cursor: "pointer",
      background: "white",
      flex: "1 1 auto",
      marginRight: "10px",
      "&:nth-of-type(4)": {
        margin: "0px",
      },
    },
  },
  demoTimeActive: {
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 51%, ${theme.palette.third.main} 100%) !important`,
    color: "white",
    fontWeight: "bold",
  },
  hearAboutUs: {
    margin: "5px 0px",
    color: "black",
    "& > div": {
      border: "2px solid #979797",
      borderRadius: "10px",
      cursor: "pointer",
      "&:hover": {
        border: "2px solid #3584a7 !important",
      },
    },
  },
  formSubmit: {
    marginTop: "20px",
    display: "flex",
    width: "100%",
    placeContent: "center",
    "& > button": {
      background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 51%, ${theme.palette.third.main} 100%) !important`,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "100px",
      border: "none",
      color: "white",
      width: "204px",
      height: "51px",
      fontWeight: "bold",
      fontSize: "25px",
      cursor: "pointer",
    },
  },
  termsCondition: {
    padding: "10px 37px",
    fontWeight: "normal",
    fontSize: "1.1vw",
    textAlign: "center",
    color: "black",
    marginBottom: "5px",
  },
  rightPartFormWrapper: {
    display: "flex",
    flexDirection: "column",
    placeContent: "space-evenly",
    height: "100%",

    [theme.breakpoints.up("md")]: {
      placeContent: "initial",
      height: "auto",
    },
  },
}));

function FormMUI(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [demoTime, setDemoTime] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const submitResponse = (e) => {
    let url =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScWUyeUYn_LuegxlH5SkFfGwXnZ4fW8u2cbFV_Kr4FRS3tTmw/formResponse";
    e.preventDefault();
    if (name === "" || address === "" || phone === "" || demoTime === "") {
      alert("Please fill the required fields!");
      return false;
    }
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      header: {
        "Content-Type": "application/json",
      },
      body: getInputData(),
    })
      .then((data) => {
        console.log(data);
        alert("Form Submitted");
        setName("");
        setAddress("");
        setPhone("+91");
        setDemoTime("");
        setSelectedOption("");
      })
      .catch((err) => console.error(err));
    return true;
  };

  function getInputData() {
    let dataToPost = new FormData();

    dataToPost.append("entry.923575230", name);
    dataToPost.append("entry.959771919", address);
    dataToPost.append("entry.1470857061", phone);
    dataToPost.append("entry.766642417", demoTime);
    dataToPost.append(
      "entry.210369612",
      selectedOption.value === undefined ? "" : selectedOption.value
    );

    return dataToPost;
  }
  return (
    <Paper elevation={3} className={classes.wrapper} ref={props.formRef}>
      <div className={classes.leftPart}>
        <img src={logo} alt="logo" style={{ width: "19vw" }} />
        <p>PolyMatic</p>
        <p>Redesign Everything</p>
      </div>
      <div className={classes.rightPart}>
        <div
          className={classes.rightPart_closeBtn}
          onClick={() => {
            props.formRef.current.style.display = "none";
          }}
        >
          <span>&times;</span>
        </div>
        <p>
          Get a Free Demo.
          <br />
          It's Completely{" "}
          <span style={{ color: "#3584A7", fontWeight: "bold" }}>Free!</span>
        </p>
        <div className={classes.rightPartFormWrapper}>
          <form onSubmit={submitResponse}>
            <p>
              Name<sup>*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter your Name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="entry.923575230"
            />
            <p>
              Address<sup>*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter your Address here"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              name="entry.959771919"
            />
            <p>
              Phone Number<sup>*</sup>
            </p>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
            <input type="hidden" value={phone} name="entry.1470857061" />
            <p>
              Selected Demo Time<sup>*</sup>
            </p>
            <div className={classes.demoTime}>
              {["1 - 2", "3 - 4", "5 - 6", "7 - 8"].map((x) => (
                <button
                  className={x === demoTime ? classes.demoTimeActive : ""}
                  type="button"
                  onClick={() => {
                    setDemoTime(x);
                  }}
                >
                  {x}
                </button>
              ))}
              <input type="hidden" name="entry.766642417" value={demoTime} />
            </div>
            <p>Where did you hear about us?</p>
            <Select
              className={classes.hearAboutUs}
              value={selectedOption}
              placeholder="Select"
              options={options}
              isSearchable={false}
              name="entry.210369612"
              onChange={(e) => {
                setSelectedOption(e);
              }}
            />
            <div className={classes.formSubmit}>
              <button type="submit" className="form_button">
                Continue
              </button>
            </div>
          </form>
          <p className={classes.termsCondition}>
            By registering here, I agree to PolyMatic's{" "}
            <span style={{ color: "#3584A7" }}>Terms & Condition</span> and{" "}
            <span style={{ color: "#3584A7" }}>Privacy Policy</span>
          </p>
        </div>
      </div>
    </Paper>
  );
}

export default FormMUI;
