import React, { useEffect, useState } from 'react'
import axios from 'axios'
function UserList() {
    const[responseData,setData]= useState([]);
    useEffect(() =>{
        axios.get('https://reqres.in/api/users?page=2')
        .then(response=>{
            console.log(response);
            setData(response.data);
        })

    })
    
    return (
        <div>
          <h1>  {responseData.email}</h1>
          
        </div>
    )
    
}

export default UserList
