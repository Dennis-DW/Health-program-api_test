import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';

beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Client API Integration Tests', () => {
  test('Register a new client', async () => {
    const res = await request(app)
      .post('/api/clients')
      .send({
        name: 'John Doe',
        dob: '1990-01-01',
        gender: 'Male',
        national_id: '123456789',
        contact_info: 'john@example.com',
        password: 'password123',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.client).toHaveProperty('_id');
  });
});