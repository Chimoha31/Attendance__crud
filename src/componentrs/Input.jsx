import React, { Fragment } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const Input = () => {
  return (
    <Fragment>
      <form className="mb-5">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
          <FormControl
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          <FormControl
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <div className="mb-3">
          <Button variant="outline-success">Remote</Button>
          <Button variant="outline-danger">In Person</Button>
        </div>

        <div className="d-grid">
          <Button variant="primary">Add / Update</Button>
        </div>
      </form>
    </Fragment>
  );
};

export default Input;
