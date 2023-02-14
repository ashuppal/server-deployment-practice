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

  it('handles the bad path',async()=>{
    const response = await mockRequest.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  },
  );

  it('handles the 404 path',async()=>{
    const response = await mockRequest.get('/404');
    expect(response.status).toBe(404);
  },
  );


});



