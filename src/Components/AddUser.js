import React, { useState } from "react";
import { Button ,Form } from "react-bootstrap"
import Users from "./Users"
import {v4 as uuid } from "uuid";
import { useNavigate} from 'react-router-dom'


function AddUser(){

    const[name ,setName] =useState('');
    const [email, setEmail]=useState('');

    let history = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const ids= uuid();
        let uniqueId =ids.slice(0,8);
        let a =name;
        let b= email;

        Users.push({id:uniqueId, 
            Name: a, Email: b })

        history('/');
    }

    return(
        <div>
            <div className="p-5">
                <h1>Crude Add User</h1>
            </div>
        <Form className="d-grid gap-2" style={{margin:"10rem"}}>
            <Form.Group className="nb-3" controlId="forName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=> setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="nb-3" controlId="forEmail">
                <Form.Control type="text" placeholder="Enter Email" required onChange={(e)=> setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e)=> handleSubmit(e)}type="submit">Submit</Button>
        </Form>
        </div>
    )
}


export default AddUser;
