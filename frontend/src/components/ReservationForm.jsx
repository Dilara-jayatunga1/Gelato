import React from 'react'

const ReservationForm = () => {
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour =9;hour <21 ; hour++) {
            const starthour = hour % 12 === 0 ? 12 : hour % 12;
            const startPeriod = hour < 12 ? 'AM' : 'PM';

            const endhour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;   
            const endPeriod = (hour + 1) < 12 ? 'AM' : 'PM';
            slots.push(`${starthour}:00 ${startPeriod} - ${endhour}:00 ${endPeriod}`);
        }
        return slots;
    }
  return (
    <div>
        <form >
            <h2>Book a Reservation</h2>
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email' />
            <input type="tel" placeholder='Contaact Number' />
           <input type="date" required />
           
           <select required>
            <option value="">Select Time</option>{
                generateTimeSlots().map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
                ))
            }
            
           </select>

           <select required>
            {/* Select Number of Guests from 1 to 10 using an Array  */}
           {[...Array(10).keys().map(i => (
            <option key={i + 1} value={i + 1}>{i+1 } Guest(s)</option>
           ))]}
           </select>
           <button type="submit">Book a Reservation</button>
        </form>
    </div>
  )
}

export default ReservationForm;