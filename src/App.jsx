import React from 'react'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Account from './components/Account'
import {Route, Routes} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  

  return (
    //<div className="w-screen h-screen bg-red-300">  yes tailwind is working.
    <div >
    <h1 className="text-center text-Jxl font-bold">
      Firebase Auth and Context
    </h1>
    <AuthContextProvider>
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/account' element={
      <ProtectedRoutes>
        <Account/>
      </ProtectedRoutes>} />
    </Routes>

    </AuthContextProvider>
    

    
    </div>
  );
}

export default App;
