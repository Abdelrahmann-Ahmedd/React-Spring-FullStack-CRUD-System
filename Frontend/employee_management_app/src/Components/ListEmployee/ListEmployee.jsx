import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function ListEmployee() {

    const REST_API_BASE_URL = 'http://localhost:8081/api/EmployeeManagementApp/employee';

    let [allEmployee,setAllEmployee] = useState([]);
    let [alert , setAlert] = useState(false);
    let [alertSuc , setAlertSuc] = useState(false);

    let myNavigate = useNavigate();

    useEffect(()=>{
        getAllEmployee();
    },[])

    function getAllEmployee() {
        return axios.get(REST_API_BASE_URL).then((res)=>{
            console.log(res);
            setAllEmployee(res.data);
        }).catch((e)=>{
            console.log(e);
        })
    }

    function addEmployee() {
        myNavigate("/new-employee")
    }

    function updateEmployee(id){
        myNavigate(`/edit-employee/${id}`)
    }

    function deleteEmployee(id) {
        return axios.delete(REST_API_BASE_URL+"/"+id).then((res)=>{
            console.log(res.data);
            setAlertSuc(true)
            setTimeout(()=>{
                setAlertSuc(false)
            },3000)
            getAllEmployee()
        }).catch((e)=>{
            console.log(e);
            setAlert(true)
            setTimeout(()=>{
                setAlert(false)
            },3000)
        })
    }

    return (
        <>
            <h2 className=" text-center mt-3 mb-5">List of Employees</h2>
            {alert?<div className="alert alert-danger w-50 m-auto mb-3 mt-2" role="alert">
                Some Error occured. 
            </div>:""}
            {alertSuc?<div className="alert alert-success w-50 m-auto mb-3 mt-2" role="alert">
                Employee is Deleted Successfuly. 
            </div>:""}
            <div className="w-75 m-auto">
                <button onClick={addEmployee} className="btn btn-primary mb-2">Add Employee</button>
                <table className=" table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">First Name</th>
                            <th className="text-center">Last Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { allEmployee.map((emp,ind)=>{ return <tr key={ind}>
                            <td className="text-center">{emp.id}</td>
                            <td className="text-center">{emp.firstName}</td>
                            <td className="text-center">{emp.lastName}</td>
                            <td className="text-center">{emp.email}</td>
                            <td className="d-flex justify-content-evenly">
                                <button onClick={()=>{updateEmployee(emp.id)}} className="btn btn-info">Update</button>
                                <button onClick={()=>{deleteEmployee(emp.id)}} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>})}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListEmployee

