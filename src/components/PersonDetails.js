
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PeopleService from '../service/PeopleService';

const PersonDetails = () => {


    const history = useHistory();
    const params=useParams();
    const [person, setPerson]=useState({id:0,firstName:"",lastName:"",email:"",title:""}); //set the variable template 
    
    
    useEffect(()=>{
        console.log("I want to see the problem"+ params.id);
        const service=new PeopleService();
        service.getPersonById(params.id).then(response=>{
            //todo: update the person state
            console.log("I want to see the problem"+ response);       

            if(response.status === 200){
                setPerson(response.data)
            }
            
        });

    },[]); //syntax for useEffect empty Dependency[]




    return (
        <div className='col-6'>
        <div className="container">
            <div className="card">
                <div className="card-header bg-info text-white">
                    Person Information
                </div>
                <div className="card-body">
                    <h5 className="card-title">Title: {person.title}</h5>
                    <p className="card-text">ID: {person.id}</p>
                    <p className="card-text">Name: {person.firstName} {person.lastName}</p>
                    <p className="card-text">Email: {person.email}</p>
                </div>
                <div className="card-footer bg-dark">
                    <button className="btn btn-outline-danger" onClick={()=> history.push('/crud')}>Back</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PersonDetails;