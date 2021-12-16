import React, { useState, useEffect } from "react";
import { Container, Button, TextField } from "@material-ui/core";

import Dropdown from "react-bootstrap/Dropdown";

const CallHistory = ({ calls, createCall }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    console.log("useEffect called");
  }, []);
  const handleChange = (e) => setPhoneNumber(e.target.value);
  const submitCall = (call) => {
    console.log("submitCall called");
  };
  return (
    <Container>
      <Dropdown style={{ paddingTop: "20px" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu></Dropdown.Menu>
      </Dropdown>
      <p>Phone Number Selected: {phoneNumber}</p>
      <TextField
        name="phoneNumber"
        label="Phone Number"
        handleChange={handleChange}
        autoFocus
      />
      <Button size="medium" color="secondary" onClick={() => submitCall()}>
        Create Call
      </Button>
    </Container>
  );
};

export default CallHistory;
