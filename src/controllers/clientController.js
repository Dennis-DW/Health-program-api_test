import Client from '../models/Client.js';
import Enrollment from '../models/Enrollment.js';
import jwt from 'jsonwebtoken';

export const registerClient = async (req, res) => {
    try {
        const { name, dob, gender, national_id, contact_info, password } = req.body;

        // Validate required fields
        if (!name || !dob || !gender || !national_id || !contact_info || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the client already exists
        const existingClient = await Client.findOne({ national_id });
        if (existingClient) {
            return res.status(400).json({ message: 'Client with this national ID already exists' });
        }

        // Create the client
        const client = await Client.create(req.body);

        // Return the created client (without token)
        res.status(201).json({ client });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

export const loginClient = async (req, res) => {
    try {
        const { national_id, password } = req.body;

        // Validate required fields
        if (!national_id || !password) {
            return res.status(400).json({ message: 'National ID and password are required' });
        }

        // Find the client
        const client = await Client.findOne({ national_id });
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        // Compare passwords
        const isMatch = await client.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: client._id, isAdmin: client.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

export const searchClients = async (req, res) => {
    try {
      const { name = '', national_id = '' } = req.query; 
      const filter = {};
      if (name) filter.name = { $regex: name, $options: 'i' };
      if (national_id) filter.national_id = national_id;
  
      const clients = await Client.find(filter);
  
      // Check if no clients were found
      if (clients.length === 0) {
        return res.status(404).json({ message: 'No clients found' });
      }
  
      res.status(200).json(clients);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };

export const getClientProfile = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        const enrollments = await Enrollment.find({ client: client._id }).populate('program');
        res.status(200).json({ client, programs: enrollments });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

export const enrollClient = async (req, res) => {
    try {
        const { program_ids, enrollment_date } = req.body;

        // Validate required fields
        if (!program_ids || !Array.isArray(program_ids) || program_ids.length === 0) {
            return res.status(400).json({ message: 'Program IDs are required and must be an array' });
        }

        const enrollments = await Promise.all(
            program_ids.map(id =>
                Enrollment.create({ client: req.params.id, program: id, enrollment_date })
            )
        );
        res.status(201).json(enrollments);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};