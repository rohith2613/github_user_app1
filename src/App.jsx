import React from 'react'
import Logo from './components/Logo'
import AllRoutes from './routes/AllRoutes'


const App = () => {
  return (
    <div className='min-h-screen  bg-slate-700'>
      <div className='container py-3 text-white'>
        <Logo />
        <AllRoutes />
      </div>
    </div>
  )
}

export default App
