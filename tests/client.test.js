import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';

// Setup the test environment and connect to the test database
beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Cleanup the test database and close the connection after tests
afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

// Integration tests for the Client API
describe('Client API Integration Tests', () => {
  test('Register a new client', async () => {
    const res = await request(app)
      .post('/api/clients')
      .send({
        name: 'Dennis Wambua',
        dob: '2002-04-11',
        gender: 'Male',
        national_id: '123456789',
        contact_info: 'denny@example.com',
        password: 'password123',
      });

    // Assert the response status and structure
    expect(res.statusCode).toBe(201);
    expect(res.body.client).toHaveProperty('_id');
  });
});