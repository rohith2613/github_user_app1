import React from 'react'
import { Link } from 'react-router-dom'

const UsersList = ({users}) => {
  return (
    
      <div className='flex gap-5 flex-wrap justify-center py-5'>
      {users && users.map((user,index)=>(
        user?.login && (
          <div className='flex   boarder-2 border-black bg-slate-50   flex-col   items-center' key={index}>
          <div
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-xl font-bold text-gray-900 sm:text-3xl">
        {user.login}
      </h3>

      <p className="mt-2 text-lg font-medium text-gray-600">{user.name}</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt=""
        src={user.avatar_url}
        className="size-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4">
    <p className="text-pretty text-sm text-gray-600">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
      maiores deleniti consectetur nobis et eaque.
    </p>
  </div>
   <Link to={`${user.login}`}>
   <button className='font-semibold text-white bg-gradient-to-r from-red-800  to-blue-800 py-1 px-4 mt-2 rounded-sm block'>View</button></Link>
  
</div>
          </div>
        )
        
          
      ))}
    </div>
    
  );
}

export default UsersList
