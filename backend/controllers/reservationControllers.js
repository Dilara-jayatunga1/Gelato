import Reservation from "../models/reservation.js";    

const createReservation = async (req, res) => {
try {

const {name, email, phone, date, time, guests} = req.body;
if (!name || !email || !phone || !date || !time || !guests) {
    return res.json({error: "Please fill all fields"});
}
const newReservation = new Reservation({name , email, phone, date, time, guests});
await newReservation.save();
res.json({message: "Reservation Created", reservation: newReservation});
} catch (error) {
    res.json({error: "Error creating reservation", details: error.message});

}
}

const getAllReservation = async (req, res) => {
try{
const reservations = await Reservation.find();
res.json(reservations);
}catch(error) {
    res.json({error: "Error fetching reservations"});
}
}
const deleteReservation = async (req, res) => {
    try{
        const{ id } = req.params;
        await Reservation.findByIdAndDelete(id);
        res.json({success:true,message: "Reservation deleted successfully"});

    }catch(error) {
        res.json({success:false, error: "Error deleting reservation"});
    }
}

export { createReservation, getAllReservation, deleteReservation };