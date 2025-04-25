import mongoose from 'mongoose';

const ProgramSchema = new mongoose.Schema({
  name: String,
  description: String,
});

export default mongoose.model('Program', ProgramSchema);