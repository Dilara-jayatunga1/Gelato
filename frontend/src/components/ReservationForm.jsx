import React, { useState, useEffect } from 'react';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        date: "",
        time: "",
        guests: "1"
    });

    const handleChanges= (e) => {
        setFormData ({...formData,[e.target.name]: e.target.value});
    };


    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 9; hour < 21; hour++) {
            const startHour = hour % 12 === 0 ? 12 : hour % 12;
            const startPeriod = hour < 12 ? 'AM' : 'PM';
            const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
            const endPeriod = (hour + 1) < 12 ? 'AM' : 'PM';
            slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);
        }
        return slots;
    };

    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-pink-100 via-yellow-100 to-purple-100 px-4">
            <form
                className={`bg-white shadow-2xl p-10 rounded-3xl w-full max-w-xl space-y-6 transform transition-all duration-700 ease-out 
                    ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
                <h2 className="text-4xl font-bold text-center text-pink-500">🍦 Reserve Your Scoop!</h2>

                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChanges}
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full px-5 py-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                />

                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChanges}
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-5 py-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                />

                <input
                    name="contact"
                    value={formData.contact}
                    onChange={handleChanges}
                    type="tel"
                    placeholder="Contact Number"
                    required
                    className="w-full px-5 py-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                />

                <input
                    name="date"
                    value={formData.date}
                    onChange={handleChanges}
                    type="date"
                    required
                    className="w-full px-5 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                />

                <select
                    name="time"
                    value={formData.time}
                    onChange={handleChanges}
                    required
                    className="w-full px-5 py-3 border border-purple-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                >
                    <option value="">Select Time</option>
                    {generateTimeSlots().map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                    ))}
                </select>

                <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChanges}
                    required
                    className="w-full px-5 py-3 border border-yellow-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                >
                    {[...Array(10).keys()].map(i => (
                        <option key={i + 1} value={i + 1}>{i + 1} Guest(s)</option>
                    ))}
                </select>

                <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 text-white text-lg font-semibold py-3 rounded-full shadow-lg
                            hover:shadow-pink-300 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2">
                <span className="text-2xl font-bold text-center text-white drop-shadow-lg">🍭 Book My Spot</span>
                </button>
            </form>
        </div>
    );
};

export default ReservationForm;