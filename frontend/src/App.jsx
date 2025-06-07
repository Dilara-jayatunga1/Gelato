import React from 'react'
import ReservationForm from './components/ReservationForm' 

import { ToastContainer } from 'react-toastify';
export const backendUrl = 'http://localhost:4000';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <ReservationForm />
    </div>
  )
}

export default App;