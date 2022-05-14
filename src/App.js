import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./componentrs/Header";
import Input from "./componentrs/Input";
import StatusBorad from "./componentrs/StatusBorad";

const App = () => {
  return (
    <div className="">
      <Header />
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <Input />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <StatusBorad />
        </Row>
      </Container>
    </div>
  );
};

export default App;
