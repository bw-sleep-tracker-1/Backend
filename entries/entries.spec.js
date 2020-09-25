const request = require('supertest');
const server = require('../api/server');
const db = require("../data/connection");

let token;

describe("Tests the entries router", () => {
    describe("Tests the get entries endpoint", () => {

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
                .get("/entries")
                .then(res => {
                    expect(res.status).toBe(401);
                });
        })

        it("Should return a status code of 200 with a token", () => {
            return request(server)
                .get("/entries")
                .set("Authorization", token)
                .then(res => {
                    expect(res.status).toBe(200);;
                });
        })
    })

    describe("Tests the get a specific entry endpoint", () => {
        it("Should return a status code of 401 without a token", () => {
            return request(server)
                .get("/entries/1")
                .then(res => {
                    expect(res.status).toBe(401);
                });
        })

        it("Should return a status code of 200 with a token", () => {
            return request(server)
                .get("/entries/1")
                .set("Authorization", token)
                .then(res => {
                    expect(res.status).toBe(200);;
                });
        })
    })

    describe("Tests the edit entry endpoint", () => {
        it("Should return a status code of 401 without a token", () => {
            return request(server)
                .put("/entries/1")
                .send({
                    "bedtime": "2020-09-01T22:00:00.000Z",
                    "waketime": "2020-09-02T06:00:00.000Z",
                    "wake_rating": 3
                })
                .then(res => {
                    expect(res.status).toBe(401);
                });
        })

        it("Should return a status code of 200 with a token", () => {
            return request(server)
                .put("/entries/1")
                .set("Authorization", token)
                .send({
                    "bedtime": "2020-09-01T22:00:00.000Z",
                    "waketime": "2020-09-02T06:00:00.000Z",
                    "wake_rating": 3
                })
                .then(res => {
                    expect(res.status).toBe(200);
                });
        })
    })
});