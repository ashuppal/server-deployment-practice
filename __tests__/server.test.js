const { app } = require('../server.js');
const supertest = require('supertest');

const mockRequest = supertest(app);

describe('API server', () => {
  it('handles the root path',async()=>{
    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    // expect(response.text).toBe('this is a log');
  });
});

