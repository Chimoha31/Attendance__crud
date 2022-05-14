import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";

const StatusBorad = () => {
  return (
    <Fragment>
      <div>
        <Button variant="dark" className="mb-3">Refresh List</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Teddy Maekawa</td>
            <td>mokochii1108@gmail.com</td>
            <td>Remote</td>
            <td>
              <Button variant="secondary">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default StatusBorad;
