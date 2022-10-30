import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Form, Button } from "semantic-ui-react";
import "./styles.css";

export default function FormReg() {
  // const [firstName, setfirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailinput, setEmailinput] = useState(false);
  const [emailerror, setEmailerror] = useState("Не должно быть пустым");
  const [password, setPassword] = useState("");
  const [passwordinput, setPasswordinput] = useState(false);
  const [passworderror, setPassworderror] = useState("Не должно быть пустым");
  const [formvalid, setFormvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit form:", passworderror, emailerror);
  };

  useEffect(() => {
    if (emailerror || passworderror) {
      setFormvalid(false);
    } else {
      setFormvalid(true);
    }
  }, [emailerror, passworderror]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailerror("некорректный ввод");
      if (!e.target.value) {
        setEmailerror("не должно быть пустым");
      }
    } else {
      setEmailerror("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPassworderror("не должно быть меньше 6 символов");
      if (!e.target.value) {
        setPassworderror("не должно быть пустым");
      }
    } else {
      setPassworderror("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailinput(true);
        break;
      case "password":
        setPasswordinput(true);
        break;
      default:
        break;
    }
  };
  return (
    <Form className="FormReg" onSubmit={handleSubmit}>
      <Form.Field>
        <label>First Name </label>
        <input
          type="text"
          required
          id="firstName"
          placeholder="First Name"
          // value={firstName}
          // onChange={checkFirstName}
          // onChange= {(e) => setfirstName(e.target.value)}
          // onChange= {checkName(firstName, (e) => setfirstName(e.target.value))}
        ></input>
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          type="text"
          required
          id="lastName"
          placeholder="Last Name"
          // onChange={checkLastName}
        ></input>
      </Form.Field>
      <Form.Field>
        <label>
          Email
          {emailinput && emailerror && (
            <span style={{ color: "red" }}> {emailerror}</span>
          )}
        </label>
        <input
          value={email}
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => blurHandler(e)}
          name="email"
          type="email"
          placeholder="Email"
        />
        {}
      </Form.Field>
      <Form.Field>
        <label>
          Password
          {passwordinput && passworderror && (
            <span style={{ color: "red" }}> {passworderror}</span>
          )}
        </label>
        <input
          value={password}
          onChange={(e) => passwordHandler(e)}
          onBlur={(e) => blurHandler(e)}
          name="password"
          placeholder="Password"
          type="password"
        />
      </Form.Field>
      <Form.Field>
        <label>Company Name</label>
        <input placeholder="Company Name" type="text" />
      </Form.Field>
      <Button disabled={!formvalid} type="submit">
        Register
      </Button>
      <Button>Cancel</Button>
    </Form>
  );
}
