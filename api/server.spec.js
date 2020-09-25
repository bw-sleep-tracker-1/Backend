const request = require('supertest');

const server = require('./server.js');

describe("Tests the server", () => {
  describe('index route', () => {
    it('should return an OK status code from the index route', async () => {
      const response = await request(server).get('/');

      expect(response.status).toBe(200);
    });

    it('should return a JSON object from the index route', async () => {
      const response = await request(server).get('/');

      expect(response.type).toEqual('application/json');
    });
  });
});