import React, { Fragment, useState } from "react";
import { Alert, Button, FormControl, InputGroup } from "react-bootstrap";
import PersonData from "./person_data/PersonData";

const Input = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Remote");
  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState({ error: false, errorMsg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    if (name === "" || email === "") {
      setMessage({error: true, errorMsg: "Fill in the All blank is required"});
    }else{
      await PersonData.addPersons()
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="mb-5">
        {message.errorMsg ? <Alert variant="danger">{message.errorMsg}</Alert> : <Alert></Alert>}
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
          <FormControl
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          <FormControl
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>

        <div className="mb-3">
          <Button
            variant="outline-success"
            onClick={(e) => {
              setStatus("Remote");
              setFlag(!flag);
            }}
            disabled={flag}
          >
            Remote
          </Button>
          <Button
            variant="outline-danger"
            onClick={(e) => {
              setStatus("In person");
              setFlag(!flag);
            }}
            disabled={!flag}
          >
            In Person
          </Button>
        </div>

        <div className="d-grid">
          <Button variant="primary">Add / Update</Button>
        </div>
      </form>
    </Fragment>
  );
};

export default Input;
