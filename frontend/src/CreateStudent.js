import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function CreateStudent(){
    const [fullname, setfullname] = useState('')
    const [address, setaddress] = useState('')
    const [phone, setphone] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [pincode, setpincode] = useState('')
    const [physicsmarks, setphysicsmarks] = useState('')
    const [chemistrymarks, setchemistrymarks] = useState('')
    const [mathsmarks, setmathsmarks] = useState('')
    const [totalpercentage, settotalpercentage] = useState('')

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/createstudent', {fullname, address, phone, city, state, pincode, physicsmarks, chemistrymarks, mathsmarks, totalpercentage})
        .then(res => {
            console.log(res);
            navigate('/Home');
        }).catch(err => console.log(err));
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h3>Add Student Details</h3>
                    <div className="mb-2">
                        <label htmlFor="">Fullname</label>
                        <input type="text" placeholder="Enter Fullname" className="form-control" onChange={e => setfullname(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder="Enter Address" className="form-control" onChange={e => setaddress(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Phoneno</label>
                        <input type="number" placeholder="Enter Phone no." className="form-control" onChange={e => setphone(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">city</label>
                        <input type="text" placeholder="Enter city" className="form-control" onChange={e => setcity(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">state</label>
                        <input type="text" placeholder="Enter state" className="form-control" onChange={e => setstate(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">pincode</label>
                        <input type="number" placeholder="pincode" className="form-control" onChange={e => setpincode(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">PhysicsMarks</label>
                        <input type="number" placeholder="Enter Physics Marks" className="form-control" onChange={e => setphysicsmarks(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">ChemistryMarks</label>
                        <input type="number" placeholder="Enter Chemistry Marks" className="form-control" onChange={e => setchemistrymarks(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">MathsMarks</label>
                        <input type="number" placeholder="Enter Maths Marks" className="form-control" onChange={e => setmathsmarks(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">TotalPercentage</label>
                        <input type="number" placeholder="Enter Total Percentage" className="form-control" onChange={e => settotalpercentage(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateStudent