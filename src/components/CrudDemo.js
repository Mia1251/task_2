
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import PeopleService from '../service/PeopleService';


const CrudDemo = () => {

  const [persons, setPersons] = useState([]);
  const [reload, setReload]=useState(false);

  useEffect(() => {
    const service = new PeopleService();
    service.findAllPeople().then(response=>{
      setPersons(response.data);
    });
   
  }, [reload]);

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
      const service = new PeopleService();
      service.deletePersonById(props.id).then(response=>{
        console.log("is it deleted "+ response);
        if(response.status===202){
          console.log("is it deleted "+ response);
          // show notification msge when deleted successfull
        }else{
          // throw error msge.
        }
      });

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

const Form =()=>{
 const{register,handleSubmit,reset,formState:{errors}}=useForm();

 const savePerson =(data)=>{

  console.log(data);
  const service= new PeopleService();
  service.savePerson(data).then(response=>{
if(response.status===201){
  setReload(!reload);
  // set the message satate
}else{
  // throw API error
}
  });
 }

  
 
  return(
    <Fragment>
    <form className='form-control' onSubmit={handleSubmit(savePerson)}>
      <div className='row mb-3'>
        <div className='col-6'>
          <input type="text" className='form-control'{...register("firstName",{required:true})} placeholder='Enter First Name'></input>
          {errors.firstName && <span className='text-danger'>First name is needed</span>}
        </div>
        <div className='col-6'>
          <input type="text" className='form-control'{...register("lastName",{required:true})} placeholder='Enter Last Name'></input>
          {errors.lastName && <span className='text-danger'>last name is required</span>}
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col'>
        <input type="text" className='form-control'{...register("email",{required:true})} placeholder='Enter Email'></input>
        {errors.email && <span className='text-danger'>email is requred</span>}
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col'>
        <input type="text" className='form-control'{...register("title")}placeholder='Enter Title'></input>
        </div>
      </div>
      <button type='submit' className='btn btn-success m-2'>Add</button>
      <button type='button' className='btn btn-danger'onClick={()=>reset()}>Reset</button>
    </form>
    </Fragment>
  );
  
}
  return (
    <div>
      <Form/>
      <Table />
    </div>
  );
};

export default CrudDemo;
