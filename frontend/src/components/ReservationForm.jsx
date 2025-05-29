import React from 'react'

const ReservationForm = () => {
  return (
    <div>
        <form >
            <h2>Book a Reservation</h2>
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email' />
            <input type="tel" placeholder='Contaact Number' />
           < input type="date" required />
           
           <select required>
            <option value="">Select Time</option>
            {/* <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option> */}
           </select>
           <select required>
           {...Array.from(10).keys().map(i => (
            <option key={i} value={`${i + 10}:00`}>{`${i + 10}:00 AM`}</option>
           ))}
           </select>
        </form>
    </div>
  )
}

export default ReservationForm