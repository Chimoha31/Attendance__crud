import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./componentrs/Header";
import Input from "./componentrs/Input";
import StatusBorad from "./componentrs/StatusBorad";

const App = () => {
  const [personId, setPersonId] = useState("");

  const getPersonIdHandler = (id) => {
    setPersonId(id);
  };

  return (
    <div className="">
      <Header />
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <Input personId={personId} setPersonId={setPersonId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <StatusBorad getPersonIdHandler={getPersonIdHandler} />
        </Row>
      </Container>
    </div>
  );
};

export default App;
