// UserInfo.jsx
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
const UserInfo = () => {
  const [user,setUser] = useState([]); 
  const {pathname} = useLocation();
  const navigate = useNavigate();
  let base_url = "https://api.github.com/users";

async function GetUserInfo(){
  // Extract the username from the pathname
  const username = pathname.split('/').pop();
  const res = await fetch(`${base_url}/${username}`);
  const data = await res.json();
  setUser(()=>[data]);
}

useEffect(()=>{
  GetUserInfo();
  console.log(user);
},[pathname]);

  return (
    <div className='py-5'>
      
        <button onClick={()=> navigate("/")} className='px-5 py-1 font-medium mx-1 my-4 bg-red-600 rounded text-gray-200'>Back</button>
        
        {user && user.map((uinfo,index)=>(
          <ul className='my-5 '>
            <li key={index} className='flex items-center justify-center   md:flex-row md:px-0 px-4 flex-col gap-10'>
            
            <img src={uinfo.avatar_url} alt={uinfo.name} className='w-[350px] border-2 rounded-2xl  mx-auto md:mx-0 '  />
            <div className='text-lg px-3 leading-10'>
              <h1 className='text-3xl font-extrabold pb-4 text-white'>{uinfo.login}</h1>
              <h1 className='text-slate-100 font-semibold'><span className='text-red-500 font-semibold text-xl'>Login_name : </span> {uinfo.login}</h1>
              <h1 className='text-slate-100 font-semibold'><span className='text-red-500 font-semibold text-xl'>followers : </span> {uinfo.followers}</h1>
              <h1 className='text-slate-100 font-semibold'><span className='text-red-500 font-semibold text-xl'>following : </span> {uinfo.following}</h1>
              <h1 className='text-slate-100 font-semibold'><span className='text-red-500 font-semibold text-xl'>Public_Repositories : </span> {uinfo.public_repos}</h1>
              <h1 className='text-slate-100 font-semibold'><span className='text-red-500 font-semibold text-xl'>Join : </span> {new Date(uinfo.created_at).toLocaleDateString()}</h1>
              <a className=' text-white py-2 px-4 bg-blue-600 rounded-lg font-semibold cursor-pointer' href={uinfo.html_url} target='_blank' >GitHub Profile</a>
            </div>
             

            </li>
          </ul>
        ))}
        <div className='flex justify-center p-4  mt-4   gap-4 '>
          <Link to={{ pathname: `${pathname}/repos`, state: { user } }}>
          <button className='flex items-center p-4 bg-red-600 text-white font-bold'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-bookmark-fill mr-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>Repositories</button>
</Link>
<Link to={"/:name/activity"}>
          <button className='flex items-center bg-red-600 text-white p-4 font-bold'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-activity mr-1 font-bold" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
</svg>Activity</button>
</Link>
<Link to={"/:name/followers"}>
          <button className='flex items-center p-4 bg-red-600 text-white font-bold'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-person-circle mr-1 font-bold" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>Followers</button>
</Link>
        </div>
      
    </div>
  )
}

export default UserInfo
