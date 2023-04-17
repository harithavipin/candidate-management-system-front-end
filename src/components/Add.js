import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios';


function Add() {
    const [id, setId] = useState('')

    const [cName, setName] = useState('')
    const [cAdhar, setAdhar] = useState('')
    const [cEmail, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [cQfn, setQfn] = useState('')
    const [ctExp, setExp] = useState('')
    const [cRExp, setRExp] = useState('')
    
    let location=useNavigate()

    useEffect(() => {
        setId(uuid().slice(0, 3))

    }, [])


    const handleAddCandidate = async (e) => {
        e.preventDefault()
        setId(uuid().slice(0, 3))
        const body = {
            id,
            cName,
            cAdhar,
            cEmail,
            contact,
            cQfn,
            ctExp,
            cRExp
           
        }
console.log(body);
        const result = await axios.post("http://localhost:8001/add-candidate", body)
        alert(result.data.message);
        location('/')
    }


    return (
        <div>
            <div className=' border border-success mt-4 container'>
                <Form>

                    <div class="mt-2 mb-2">
                        <input type="text" class="form-control" placeholder="Name"
                            onChange={(e) => setName(e.target.value)}></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Adhar"
                            onChange={(e) => setAdhar(e.target.value)}></input>



                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Email "
                            onChange={(e) => setEmail(e.target.value)}></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Contact"
                            onChange={(e) => setContact(e.target.value)}></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Qualification"
                            onChange={(e) => setQfn(e.target.value)}></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Total Years of Experience"
                            onChange={(e) => setExp(e.target.value)}></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Relevant Years of Experience" onChange={(e) => setRExp(e.target.value)}></input>

                    </div>
                    
                    <div class="mb-2">
                        <Button onClick={(e) => handleAddCandidate(e)} class="btn btn-success ms-0">Create</Button>&nbsp;
                        <Link to={'/'}><Button class="btn btn-warning ms-2" >Close</Button></Link>
                    </div>

                </Form>

            </div>
        </div>


    )
}

export default Add