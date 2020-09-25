const request = require('supertest');
const server = require('../api/server');
const db = require("../data/connection");

describe("Tests the auth router", () => {
    describe("Tests the sign up endpoint", () => {
        it("Should return a status code of 201", () => {
            return request(server)
                .post("/auth/signup")
                .send({ username: "coolestdood", password: "password" })
                .then(res => {
                    expect(res.status).toBe(201);
                });
        })

        it("Should return a JSON object", () => {
            return request(server)
                .post("/auth/signup")
                .send({ username: "ausername", password: "password" })
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        })
    })

    describe("Tests the login endpoint", () => {
        it("Should return a status code of 200", () => {
            return request(server)
                .post("/auth/login")
                .send({ username: "cooldood", password: "password" })
                .then(res => {
                    expect(res.status).toBe(200);
                });
        })

        it("Should return a JSON object", () => {
            return request(server)
                .post("/auth/login")
                .send({ username: "cooldood", password: "password" })
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        })
    })
});