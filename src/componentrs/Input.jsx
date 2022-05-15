import React, { Fragment, useState } from "react";
import { Alert, Button, FormControl, InputGroup } from "react-bootstrap";
import PersonData from "./person_data/PersonData";

const Input = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("In Person");
  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState({ error: false, errorMsg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    setMessage("");

    
    if (name === "" || email === "") {
      setMessage({ error: true, errorMsg: "To fill all is required" });
      return;
    }
    
    const newPerson = {
      name: name,
      email: email,
      status: status,
    };
    console.log(newPerson);
    // update()の時に修正↓
    try {
      await PersonData.addPersons(newPerson);
      setMessage({ error: false, errorMsg: "Added Successfully🎉" });
    } catch (err) {
      setMessage({ error: true, errorMsg: err.message });
    }

    setName("");
    setEmail("");
  };

  return (
    <Fragment>
      {message.errorMsg && (
        <Alert
          variant={message.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {message.errorMsg}
        </Alert>
      )}
      <form onSubmit={handleSubmit} className="mb-5">
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
            variant="secondary"
            onClick={(e) => {
              setStatus("Remote");
              setFlag(!flag);
            }}
            disabled={flag}
          >
            Remote
          </Button>
          <Button
            variant="danger"
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
          <Button variant="primary" type="submit">
            Add / Update
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default Input;
