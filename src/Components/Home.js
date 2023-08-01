import React, { Fragment } from 'react'
import { Button , Table} from 'react-bootstrap'
import Users from "./Users"
import {Link , useNavigate} from 'react-router-dom'


function Home (){
    let history =useNavigate();

    const handelEdit=(id , name, email)=>{
        localStorage.setItem("Name",name)
        localStorage.setItem("Email",email)
        localStorage.setItem("Id",id)
    }

    const handelDelete =(id)=>{
        var index = Users.map(function(e){
            return e.id
        }).indexOf(id);
        Users.splice(index,1);
        history('/')
    }

    return(
        <Fragment>
            <div className="p-5">
                <h1>Crude User data</h1>
            </div>
            <div style={{margin: "10rem"}}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Users && Users.length > 0 
                            ?
                            Users.map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Email}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                           <Button onClick={()=>handelEdit(item.id,item.Name ,item.Email)}>Edit</Button>
                                           </Link>
                                           &nbsp; 
                                           <Button onClick={()=> handelDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            : "No data vailable"
                        }
                    </tbody>
                </Table>
                <br/>
                <br/>
                <Link className="d-grid gap-2"to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )

}

export default Home;