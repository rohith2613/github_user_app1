import React, { useEffect, useRef, useState } from 'react'

import UsersList from './UsersList';
import Loading from '../components/Loading';

const User = () => {
  const [users,setUsers] = useState([]);
  const [loading , setLoading] = useState()
  let base_url = "https://api.github.com/users";
  const user = useRef("");

  async function AllUsers(){
    if(user.current.value === ""){
      setLoading("")
      const res = await fetch(base_url);
      const data = await res.json();
      setUsers(data);
      setLoading(null)
    }
    
  }

  async function findUser(){
    setLoading(true);
    if (user.current.value !== "") {
      setUsers("");
      const res = await fetch(base_url +"/"+user.current.value);
      const data = await res.json();
      console.log(data);
       setUsers(()=>[data]);
       user.current.value = "";
      
    }else{
      AllUsers();
    }
    setLoading(null);
  }

useEffect(()=>{
  AllUsers();
},[setUsers])

  return (
    <div className='my-2'>
      <div className='flex justify-center items-center h-11 my-5'>
      <input type="text" ref={user} id="search-navbar" className="block w-96 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white font-semibold focus:ring-blue-500 focus:border-blue-500" placeholder="Search github username..." />
      <button onClick={findUser} className='py-2 px-4  rounded font-semibold ml-2 bg-blue-600 '>Search</button>
      </div>
      { loading ? <Loading /> :  <UsersList users={users} />}
    </div>
  )
}

export default User
