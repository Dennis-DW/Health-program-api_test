import Program from '../models/Program.js';

export const createProgram = async (req, res) => {
  try {
    const program = await Program.create(req.body);
    res.status(201).json(program);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};