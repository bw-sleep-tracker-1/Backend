const request = require('supertest');
const server = require('../api/server');
const db = require("../data/connection");

let token;

describe("Tests the users router", () => {
    describe("Tests the get users endpoint", () => {

        beforeAll(async () => {
            await request(server)
                .post("/auth/login")
                .send({ username: "cooldood", password: "password" })
                .then(res => {
                    token = res.body.token;
                });
        });

        it("Should return a status code of 401 without a token", () => {
            return request(server)
                .get("/users")
                .then(res => {
                    expect(res.status).toBe(401);
                });
        })

        it("Should return a status code of 200 with a token", () => {
            return request(server)
                .get("/users")
                .set("Authorization", token)
                .then(res => {
                    expect(res.status).toBe(200);;
                });
        })
    })

    describe("Tests the get a specific user endpoint", () => {
        it("Should return a status code of 401 without a token", () => {
            return request(server)
                .get("/users/1")
                .then(res => {
                    expect(res.status).toBe(401);
                });
        })

        it("Should return a status code of 200 with a token", () => {
            return request(server)
                .get("/users/1")
                .set("Authorization", token)
                .then(res => {
                    expect(res.status).toBe(200);;
                });
        })
    })

    describe("Tests the get a specific user's entries endpoint", () => {
        it("Should return a status code of 401 without a token", () => {
            return request(server)
                .get("/users/1/entries")
                .then(res => {
                    expect(res.status).toBe(401);
                });
        })

        it("Should return a status code of 200 with a token", () => {
            return request(server)
                .get("/users/1/entries")
                .set("Authorization", token)
                .then(res => {
                    expect(res.status).toBe(200);;
                });
        })
    })

    describe("Tests the post entry endpoint", () => {
        it("Should return a status code of 401 without a token", () => {
            return request(server)
                .post("/users/1/entries")
                .send({
                    "bedtime": "2020-09-12T22:00:00.000Z",
                    "waketime": "2020-09-13T06:00:00.000Z",
                    "wake_rating": 3
                })
                .then(res => {
                    expect(res.status).toBe(401);
                });
        })

        it("Should return a status code of 201 with a token", () => {
            return request(server)
                .post("/users/1/entries")
                .set("Authorization", token)
                .send({
                    "bedtime": "2020-09-12T22:00:00.000Z",
                    "waketime": "2020-09-13T06:00:00.000Z",
                    "wake_rating": 3
                })
                .then(res => {
                    expect(res.status).toBe(201);
                });
        })
    })
});