import express from 'express';
import { createReservation, getAllReservation, deleteReservation} from '../controllers/reservationControllers.js';
const router = express.Router();

router.post ('/create', createReservation);
router.get ('/get', getAllReservation);
router.delete ('/delete/:id', deleteReservation);

export default router;
