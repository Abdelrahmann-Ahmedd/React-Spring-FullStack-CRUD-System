import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";


function UpdateEmployee() {

    const REST_API_BASE_URL = 'http://localhost:8081/api/EmployeeManagementApp/employee';

    let [firstName , setFirstName] = useState("");
    let [lastName , setLastName] = useState("");
    let [email , setEmail] = useState("");
    let [alert , setAlert] = useState(false);
    let [alertSuc , setAlertSuc] = useState(false);

    let myNavigate = useNavigate();
    const {id} = useParams("id");


    useEffect(()=>{
        getEmployeeById(id)
    },[])

    function getEmployeeById(id){
        return axios.get(REST_API_BASE_URL+"/"+ id).then((res)=>{
            console.log(res.data)
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setEmail(res.data.email)
        }).catch((e)=>{
            console.log(e)
        })
    }

    function updateEmployee(employee) {
        return axios.put(REST_API_BASE_URL,employee).then((res)=>{
            console.log(res.data);
            setAlertSuc(true);
            setTimeout(()=>{
                setAlertSuc(false)
                myNavigate("/")
            },3000)

        }).catch((e)=>{
            console.log(e);
        });
    }

    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function saveEmployee(e) {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        if (firstName === "" || lastName === "" || email === "" || !email.match(emailRegex)) {
            setAlert(true);
        } else {
            const employee = {id:id,firstName:firstName.trim(), lastName:lastName.trim(), email};
            setAlert(false);
            console.log(employee);
            updateEmployee(employee);
        }
    }

    return (
        <>
            <h2 className="text-center">Update Employee</h2>
            {alert?<div className="alert alert-danger w-50 m-auto mb-3 mt-2" role="alert">
                Input the Correct Employee Details. 
            </div>:""}
            {alertSuc?<div className="alert alert-success w-50 m-auto mb-3 mt-2" role="alert">
                Employee is updated Successfuly. 
            </div>:""}
            <form className="w-50 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">First Name:</label>
                    <input value={firstName} onChange={handleFirstName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Last Name:</label>
                    <input value={lastName} onChange={handleLastName} type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email:</label>
                    <input value={email} onChange={handleEmail} type="email" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button onClick={saveEmployee} type="submit" className="btn btn-success">Update</button>
            </form>
        </>
    )
}

export default UpdateEmployee

