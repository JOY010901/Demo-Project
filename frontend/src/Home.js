import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    const [Home, setHome] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/Home')
        .then(res => setHome(res.data))
        .catch(err => console.log(err))
    }, [] )

    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-120 bg-white rounded'>
                <Link to="/createstudent" className='btn btn-success justify-content-center align-items-right'>Add Data</Link>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>FullName</th>
                        <th>Address</th>
                        <th>Phoneno.</th>
                        <th>city</th>
                        <th>State</th>
                        <th>Pincode</th>
                        <th>PhysicsMarks</th>
                        <th>ChemistryMarks</th>
                        <th>MathsMarks</th>
                        <th>TotalPercentage</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Home.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.Fullname}</td>
                                    <td>{data.address}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.city}</td>
                                    <td>{data.state}</td>
                                    <td>{data.pincode}</td>
                                    <td>{data.PhysicsMarks}</td>
                                    <td>{data.ChemistryMarks}</td>
                                    <td>{data.MathsMarks}</td>
                                    <td>{data.TotalPercentage}</td>
                                    <td>
                                        <button className='btn-btn-primary'>Update</button>
                                        <button className='btn-btn-danger ms-2'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home