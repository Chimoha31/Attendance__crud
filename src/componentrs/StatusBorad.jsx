import React, { Fragment, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import PersonData from "./person_data/PersonData";

const StatusBorad = ({getPersonIdHandler}) => {
  const [persons, setPersons] = useState([]);

  const getPersons = async () => {
    try {
      const data = await PersonData.getAllPerson();
      console.log(data.docs);
      // idを取り出したい為にmap()を使用
      setPersons(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPersons();
  }, []);

  const deleteHandler = async (id) => {
    await PersonData.deletePerson(id);

    getPersons();
  }

  return (
    <Fragment>
      <div>
        <Button variant="dark" className="mb-3">
          Refresh List
        </Button>
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
          {persons.map((person, index) => (
            <tr key={person.id}>
              <td>{index + 1}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.status}</td>
              <td>
                <Button variant="outline-secondary" onClick={(e) => getPersonIdHandler(person.id)}>Edit</Button>
                <Button variant="outline-danger" onClick={(e) => deleteHandler(person.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default StatusBorad;
