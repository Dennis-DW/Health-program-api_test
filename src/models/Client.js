import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Client Schema
const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    national_id: { type: String, unique: true, required: true },
    contact_info: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
});
// Middleware to hash password before saving to DB
ClientSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        // Hash the password if it has been modified or is being created for the first time
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Method to compare input password with hashed password
ClientSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

const Client = mongoose.model('Client', ClientSchema);

export default Client;
