import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {
    let location = useNavigate()
    const params = useParams()

    const [id, setId] = useState('')
    const [cName, setName] = useState('')
    const [cAdhar, setAdhar] = useState('')
    const [cEmail, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [cQfn, setQfn] = useState('')
    const [ctExp, setExp] = useState('')
    const [cRExp, setRExp] = useState('')


    const fetchCandidate = async () => {
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
    const handleUpdate = async (e) => {
        e.preventDefault()
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
        const result = await axios.post("http://localhost:8001/update-Candidate", body)
        alert(result.data.message);
        location('/')

    }

    useEffect(() => {
        fetchCandidate()
    }, [])
    return (
        <div>
            <div className=' border border-success mt-4 container'>
                <Form>

                    <div class=" mt-2 mb-2">
                        <input type="text" class="form-control" placeholder="Name" value={cName}
                            onChange={(e) => setName(e.target.value)}></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Adhar" value={cAdhar}
                            onChange={(e) => setAdhar(e.target.value)}></input></div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Email " value={cEmail}
                            onChange={(e) => setEmail(e.target.value)}></input></div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)}></input></div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Qualification" value={cQfn} onChange={(e) => setQfn(e.target.value)}></input></div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Total Years of Experience" value={ctExp}
                            onChange={(e) => setExp(e.target.value)}></input>

                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Relevant Years of Experience" value={cRExp}
                            onChange={(e) => setRExp(e.target.value)}></input>

                    </div>
                    <div class="mb-2">
                        <Button class="btn btn-success ms-0" onClick={(e) => handleUpdate(e)}>Update</Button>&nbsp;
                        <Link to={'/'}><Button class="btn btn-warning ms-2" >Close</Button></Link>
                    </div>

                </Form>

            </div>
        </div>


    )
}

export default Add