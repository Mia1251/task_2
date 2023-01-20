
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PeopleService from '../service/PeopleService';


const CrudDemo = () => {

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const service = new PeopleService();
    service.findAllPeople().then(response=>{
      setPersons(response.data);
    });
   
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

    const TableAction = (props) => {
      const deleteById=()=>{

      }
      
      const history=useHistory();
      const ShowPersonInfo=()=>{
                   
//history.push("/details/"+props.id); 
    history.push(`/details/${props.id}`); // to pass id proparties to the variable we use bt ´´   

      }
      return (
        <div>
          <button type="button" className="btn btn-primary" onClick={ShowPersonInfo}>Details</button>
          <button type="button" className="btn btn-danger m-1" onClick={deleteById}>Delete</button>
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
                <td>{person.firstName} {person.lastName}</td>
                <td>{person.email}</td>
                <td><TableAction id={person.id} /></td>
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
