import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import reservationRoutes from './routes/reservationRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors());
app.use(express.json())

app.use('/api/reservations', reservationRoutes)

app.get('/', (req, res) => {
    res.send("API is working")

    })

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
