import Client from '../models/Client.js';
import Program from '../models/Program.js';
import Enrollment from '../models/Enrollment.js';

export const registerClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const searchClients = async (req, res) => {
  const { name, national_id } = req.query;
  const filter = {};
  if (name) filter.name = { $regex: name, $options: 'i' };
  if (national_id) filter.national_id = national_id;
  const clients = await Client.find(filter);
  res.json(clients);
};

export const getClientProfile = async (req, res) => {
  const client = await Client.findById(req.params.id);
  const enrollments = await Enrollment.find({ client: client._id }).populate('program');
  res.json({ client, programs: enrollments });
};

export const enrollClient = async (req, res) => {
  try {
    const { program_ids, enrollment_date } = req.body;
    const enrollments = await Promise.all(program_ids.map(id =>
      Enrollment.create({ client: req.params.id, program: id, enrollment_date })
    ));
    res.status(201).json(enrollments);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};