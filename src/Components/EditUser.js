import React, { useState ,useEffect } from "react";
import { Button ,Form } from "react-bootstrap"
import Users from "./Users"
import { useNavigate} from 'react-router-dom'




function EditUser(){

    const [name ,setName] =useState(" ");
    const [email, setEmail] = useState(" ");
    const [id, setId] = useState(" ");

    let history = useNavigate();

    var index = Users.map(function(e){
        return e.id
    }).indexOf(id);

    const handleEdit=(e)=>{
        e.preventDefault();

        let a =Users[index];
        a.Name =name;
        a.Email = email;

        history('/');
    }

    useEffect(()=>{
        setName(localStorage.getItem("Name"))
        setEmail(localStorage.getItem("Email"))
        setId(localStorage.getItem("Id"))
    },[])


    return(
        <div>
            <div className="p-5">
                <h1>Crude Update User</h1>
            </div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="nb-3" controlId="forName">
                <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e)=> setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="nb-3" controlId="forEmail">
                <Form.Control type="text" placeholder="Enter Email" value={email} required onChange={(e)=> setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e)=> handleEdit(e)}type="submit">Update</Button>
        </Form>
        </div>
    )
}


export default EditUser;