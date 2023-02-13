import express from 'express'
import cors from 'cors'
import databaseConnection from './src/database/index.js'
import carRoute from './src/routes/carRoute.js'
import bookingRoute from './src/routes/bookingRoute.js'
import userRoute from './src/routes/userRoute.js';
const app = express()
const port = process.env.PORT || 8000
databaseConnection.getConnect();

app.use(express.json());
app.use(cors())

app.use('/api/cars/', carRoute)
app.use('/api/users/', userRoute)
app.use('/api/bookings/', bookingRoute)


app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Server is running on Port ${port}`))