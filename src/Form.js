import React, { useState } from "react";
import "./form.css";
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

function Form(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [demoTime, setDemoTime] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const submitResponse = (e) => {
    if (name === "" || address === "" || phone === "" || demoTime === "") {
      e.preventDefault();
      alert("Please fill the required fields!");
      return false;
    }
    return true;
  };

  return (
    <div className="form_container" ref={props.formRef}>
      <div className="form_leftPart">
        <div className="form_leftPart_content">
          <img src={logo} alt="logo" />
          <p style={{ fontSize: "4vw" }}>PolyMatic</p>
          <p style={{ fontSize: "1.5vw" }}>Redesign Everything</p>
        </div>
      </div>
      <div className="form_rightPart">
        <div className="form_rightPart_content">
          <div
            className="form_rightPart_closeBtn"
            onClick={() => {
              props.formRef.current.style.display = "none";
            }}
          >
            <span>&times;</span>
          </div>
          <p className="form_rightPart_text">
            Get a Free Demo.
            <br />
            It's Completely{" "}
            <span style={{ color: "#3584A7", fontWeight: "bold" }}>Free!</span>
          </p>
          <form
            method="POST"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScWUyeUYn_LuegxlH5SkFfGwXnZ4fW8u2cbFV_Kr4FRS3tTmw/formResponse"
            onSubmit={(e) => {
              return submitResponse(e);
            }}
          >
            <p>
              Name<sup>*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter your Name here"
              onChange={(e) => setName(e.target.value)}
              name="entry.923575230"
            />
            <p>
              Address<sup>*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter your Address here"
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
            <div className="demo-time">
              {["1 - 2", "3 - 4", "5 - 6", "7 - 8"].map((x) => (
                <button
                  className={x === demoTime ? "demo-time-active" : ""}
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
              className="hear_about_us"
              value={selectedOption}
              placeholder="Select"
              options={options}
              isSearchable={false}
              name="entry.210369612"
              onChange={(e) => {
                setSelectedOption(e);
              }}
            />
            <div className="form_button_wrapper">
              <button type="submit" className="form_button">
                Continue
              </button>
            </div>
          </form>
          <p className="terms_condition">
            By registering here, I agree to PolyMatic's{" "}
            <span style={{ color: "#3584A7" }}>Terms & Condition</span> and{" "}
            <span style={{ color: "#3584A7" }}>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
