import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 4020; // Changed port

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb+srv://govindbairi:Govind142%40@clientform.o5aiv.mongodb.net/?retryWrites=true&w=majority&appName=clientform')
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the application if MongoDB connection fails
  });

// Event schema and model
const eventSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  eventDate: Date,
  eventTime: String,
  eventType: String,
  venue: String,
  postalCode: String,
  message: String,
});

const Event = mongoose.model('Event', eventSchema);

// Event submission endpoint
app.post('/submit-event', async (req, res) => {
  try {
    const { name, email, phone, eventDate, eventTime, eventType, venue, postalCode, message } = req.body;

    // Create a new event document
    const newEvent = new Event({
      name,
      email,
      phone,
      eventDate,
      eventTime,
      eventType,
      venue,
      postalCode,
      message,
    });

    await newEvent.save();

    // Send success response
    res.status(200).json({ message: 'Event booking successful!' });
  } catch (error) {
    console.error("Error in /submit-event:", error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
