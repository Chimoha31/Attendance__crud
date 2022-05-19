import React, { Fragment, useEffect, useState } from "react";
import { Alert, Button, FormControl, InputGroup } from "react-bootstrap";
import PersonData from "./person_data/PersonData";

const Input = ({ personId, setPersonId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("In Person");
  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState({ error: false, errorMsg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || email === "") {
      setMessage({ error: true, errorMsg: "To fill all is required" });
      return;
    }
    const newPerson = {
      name,
      email,
      status,
    };
    console.log(newPerson);

    try {
      if (personId !== "undefined" && personId !== "") {
        await PersonData.updatePerson(personId, newPerson);
        setPersonId("");
        setMessage({ error: false, errorMsg: "Succesfully updated!!" });
      } else {
        await PersonData.addPersons(newPerson);
        setMessage({ error: false, errorMsg: "Added Successfully🎉" });
      }
    } catch (err) {
      setMessage({ error: true, errorMsg: err.message });
    }
    setName("");
    setEmail("");
  };

  // When editbutton Clicked, edit content.
  const editHandler = async () => {
    setMessage("");
    try{
      const docSnap = await PersonData.getPerson(personId)
      setName(docSnap.data().name);
      setEmail(docSnap.data().email);
      setStatus(docSnap.data().status);
    }catch(err) {
      setMessage({
        error: true,
        errorMsg: err.message
      })
    }
  };

  useEffect(() => {
    if(personId !== undefined && personId !== "")
    editHandler();
    console.log("ClickedId: ", personId);
    // eslint-disable-next-line 
  }, [personId]);

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          <FormControl
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
            value={email}
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
