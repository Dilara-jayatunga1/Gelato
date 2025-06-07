import React, { useState, useEffect } from 'react';
import { backendUrl } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminTable = () => {
  const [reservations, setReservations] = useState([]);
  const handleDelete = async (id) => {
    try {
        await axios.delete(`${backendUrl}/api/reservations/delete/${id}`);
        toast.success('Reservation deleted successfully');
        setReservations(prev => prev.filter(res => res._id !== id));
    } catch (error) {
        toast.error('Error deleting reservation');
    }
}

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(backendUrl + '/api/reservations/get');
        setReservations(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
    fetchReservations();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Admin Panel - Reservations
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Time</th>
              <th className="px-4 py-3 font-semibold">Guests</th>
              <th className="px-4 py-3 font-semibold">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reservations.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No reservations found
                </td>
              </tr>
            ) : (
              reservations.map((res, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">{res.name}</td>
                  <td className="px-4 py-3">{res.email}</td>
                  <td className="px-4 py-3">{res.phone}</td>
                  <td className="px-4 py-3">{res.date}</td>
                  <td className="px-4 py-3">{res.time}</td>
                  <td className="px-4 py-3">{res.guests}</td>
                  <td className="px-4 py-3">
                    <button 
                    onClick={() => handleDelete(res._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;