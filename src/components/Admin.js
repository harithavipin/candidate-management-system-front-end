import React from 'react'
import './Admin.css'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Admin() {
  const [allCandidate, setCandidate] = useState([])

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8001/get-all-candidates")
    setCandidate(result.data.candidates);
  }
  console.log(allCandidate);


  useEffect(() => {
    fetchData()
  }, [])

  const deleteCandidate = async (id) => {
    const result = await axios.delete("http://localhost:8001/delete-candidate/" + id)
    alert(result.data.message);
    fetchData()
  }


  return (
    <div >
      <div className='container-fluid mt-3'>
        <h1 className='head'><i class='fa-solid fa-user-group'></i>Candidate Management System
          <Link to={"/add"}>
            <button className='btn btn-success ms-3'><i class='fa-solid fa-user-plus'></i>Add</button>

          </Link>        </h1>

        <p style={{ textAlign: 'justify' }}>Recruiting the right talent for your organization is a challenge for any recruiter. Move the best candidate through the hiring process with Candidate Management system.Recruit ahead of the curve by establishing a structured hiring process. Build an effective talent pipeline, source candidates faster than ever, harness the power of data, and provide a great candidate experience.
        </p>
      </div>
      <div className=' f1 container-fluid mt-4'>

        <h2>Candidate Details</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Adhar</th>
              {/* <th>DOB</th> */}
              <th>Email</th>
              <th>Contact</th>
              <th>Qualification</th>
              <th>Total Years of Experience</th>
              <th>Relevant Years of Experience</th>


              {/* <th>Photo</th>
              <th>Resume</th> */}
              <th >Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allCandidate.map((item, index) => (

                <tr>
                  <td>{index + 1}</td>
                  <td>{item.uname}</td>
                  <td>{item.adhar}</td>
                  {/* <td><input type='date'>{item.dob}</input> </td> */}
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>{item.qfn}</td>
                  <td>{item.texp}</td>
                  <td>{item.rexp}</td>




                  <td className='hello'>
<Link to={'view/'+item.id}>
                      <button className='  btn'><i class="fa-solid fa-eye"></i></button>
  
</Link>                    
                    <Link to={"edit/" + item.id}>
                      <button className=' btn  ms-1'>
                        <i class="fa-solid fa-pen-to-square"></i></button>
                    </Link>

                    <button onClick={() => deleteCandidate(item.id)} className='  ms-1 btn '><i class="fa-sharp fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))

            }
          </tbody>
        </Table>
      </div>

    </div >

  )
}

export default Admin