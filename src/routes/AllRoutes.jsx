// AllRoutes.jsx

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from '../pages/User'
import UserInfo from '../pages/UserInfo'
import RepositoryList from '../pages/RepositoryList'
import Activity from '../pages/Activity'
import Followers from '../pages/Followers'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<User />} />
          <Route path='/:name' element={<UserInfo />} />
          <Route path='/:name/repos' element={<RepositoryList />} />
          <Route path='/:name/activity' element={<Activity />} />
          <Route path='/:name/followers' element={<Followers />} />
          


        </Routes>
    </div>
  )
}

export default AllRoutes
