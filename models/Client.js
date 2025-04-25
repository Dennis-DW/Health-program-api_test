import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  gender: String,
  national_id: { type: String, unique: true },
  contact_info: String,
});

const Client = mongoose.model('Client', ClientSchema);

export default Client;