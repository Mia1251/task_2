import React, { useEffect, useState } from 'react';

const CrudDemo = () => {

  const [persons, setPersons] = useState([{id:1,firstName:"Charles",lastName:" Rudahusha",email: "crud@lexicon.se"},
{id: 2, firstName: "Tobias", lastName: " Lundgren", email: "tobbe@lexicon.se"}]);

  useEffect(() => {

  }, []);

  const Table = () => {

    const TableHeader = () => {
      return (
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
      );
    };

    const TableAction = () => {
      return (
        <div>
          <button type="button" className="btn btn-primary">Details</button>
          <button type="button" className="btn btn-danger m-1">Delete</button>
          <button type="button" className="btn btn-warning">Edit</button>
        </div>
      )
    }

    const TableRow = () => {
      return (
        <tbody>
          {
            persons.map( (person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.firstName}{person.lastName}</td>
                <td>{person.email}</td>
                <td><TableAction /></td>
              </tr>
            ))
          }
        </tbody>
      )
    }

    return(
      <div className="container">
        <table className='table table-striped'>
          <TableHeader />
          <TableRow />
        </table>
      </div>
    );
  };






  return (
    <div>
      <Table />
    </div>
  );
};

export default CrudDemo;
