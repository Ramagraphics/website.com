import Event from '../models/eventModel.js';

export const submitEvent = async (req, res) => {
  try {
    const { name, email, phone, eventDate, eventTime, eventType, venue, postalCode, message } = req.body;

    // Validate required fields (simple validation logic can be expanded)
    if (!name || !email || !phone || !eventDate || !eventTime || !eventType || !venue || !postalCode || !message) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

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

    // Save the event to the database
    await newEvent.save();

    // Send success response
    res.status(200).json({ message: 'Event booking successful!' });
  } catch (error) {
    console.error("Error occurred while submitting event: ", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
