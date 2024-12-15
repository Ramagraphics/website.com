import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: /.+@.+\..+/ }, // Simple email regex
  phone: { type: String, required: true, match: /^[0-9]{10}$/ }, // 10 digits
  eventDate: { type: Date, required: true },
  eventTime: { type: String, required: true },
  eventType: { type: String, required: true },
  venue: { type: String, required: true },
  postalCode: { type: String, required: true, match: /^[0-9]{6}$/ }, // 6 digits for postal code
  message: { type: String, required: true },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
