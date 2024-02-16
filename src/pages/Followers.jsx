import React from 'react'
import { useNavigate } from 'react-router-dom';

const Followers = () => {
  const navigate = useNavigate();
  return (
    <>
    <button onClick={()=> navigate("/")} className='px-5 py-1 font-medium mx-1 my-4 bg-red-600 rounded text-gray-200'>Back</button>
    <div className='mt-5 flex justify-center items-center '>
      
      <h1 className='text-2xl text-red-500'>Followers Page</h1>
      
      
    </div>
    </>
    
  )
}

export default Followers
