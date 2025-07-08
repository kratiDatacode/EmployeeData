import { useEffect, useState } from 'react'
import './App.css'
import { EmployeeData } from './EmployeeData'

function App() {
  
  const [data,setData]=useState([]);

  useEffect(()=>{
    setData(EmployeeData)
  },[]);

  const handleEdit = (id) =>{
    alert(id);
  }

  const handleDelete = (id) =>{
    if(id>0){
      if(window.confirm("Are you sure to delete this item?")){
        const dt =data.filter(item=>item.id!==id);
        setData(dt);
      }
    }
  }

  return (
    <>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button className='btn btn-primary' onClick={()=>handleEdit(item.id)}>Edit</button>&nbsp;
                    <button className='btn btn-danger'onClick={()=>handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App;