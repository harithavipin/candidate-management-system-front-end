import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios';


function Add() {
    const params = useParams()
    //console.log(params);
    const [id, setId] = useState('')
    const [cName, setName] = useState('')
    const [cAdhar, setAdhar] = useState('')
    const [cEmail, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [cQfn, setQfn] = useState('')
    const [ctExp, setExp] = useState('')
    const [cRExp, setRExp] = useState('')


    const getCanDetails = async () => {
        const result = await axios.get("http://localhost:8001/get-candidate/" + params.id)
        setId(result.data.candidates.id);
        setName(result.data.candidates.uname);
        setAdhar(result.data.candidates.adhar);
        setEmail(result.data.candidates.email);
        setContact(result.data.candidates.contact);
        setQfn(result.data.candidates.qfn);
        setExp(result.data.candidates.texp);
        setRExp(result.data.candidates.rexp);
    }

    useEffect(() => {
        getCanDetails()
    }, [])



    return (
        <div>
            <div className='container-fluid mt-3'>
                <h1 className='head'><i class='fa-solid fa-user-group'></i>Candidate Details
                </h1>


            </div>
            <div className=' border border-success mt-4 container'>
                <Form>

                    <div class="mt-2 mb-2">
                        <input type="text" class="form-control" placeholder="Name"
                         value={cName}></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Adhar"
                        value={cAdhar}></input>



                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Email "
                        value={cEmail}></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Contact"
                        value={contact}></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Qualification"
                       value={cQfn} ></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Total Years of Experience"
                        value={ctExp}></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Relevant Years of Experience" value={cRExp}></input>

                    </div>

                    <div class="mb-2">

                        <Link to={'/'}><Button class="btn btn-warning ms-3" >Close</Button></Link>
                    </div>

                </Form>

            </div>
        </div>


    )
}

export default Add