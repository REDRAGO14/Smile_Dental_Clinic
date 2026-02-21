const express = require('express')
const {DB} = require('./config/db')
const cors = require('cors')
const { Booking, fetchBooking, updateStatus, analytics } = require('./controller/bookingController')
const app = express()
app.use(cors())
DB()
app.use(express.json())

app.post("/api/booking", Booking)
app.get("/api/booking", fetchBooking)
app.patch('/api/bookings/:id', updateStatus);
app.get('/api/analytics', analytics)

app.listen(3000, () => console.log('server runing on http://localhost:3000'))