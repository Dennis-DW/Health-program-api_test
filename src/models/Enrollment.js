import mongoose from 'mongoose';

const EnrollmentSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  program: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  enrollment_date: Date,
});

const Enrollment = mongoose.model('Enrollment', EnrollmentSchema);

export default Enrollment;