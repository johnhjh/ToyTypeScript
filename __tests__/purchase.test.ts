// purchase.test.ts
/**
 * Tests for the purchase endpoints of the API.
 * @module purchaseTest
 */
import request from 'supertest';
import app from '../src/app';
import { initializeDatabase } from '../src/models/purchaseModel';

beforeEach(async () => {
    // Initialize database before each test
    await initializeDatabase();
});

let testPid: string;  // This variable will store the pid of the created purchase

describe('POST /purchase', () => {
    it('should create a new purchase', async () => {
        const res = await request(app).post('/purchase').send({
            cid: 1,
            amount: 100,
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('pid');

        testPid = res.body.pid;  // Store the pid for future tests
    });
});

describe('GET /purchase', () => {
    it('should return all purchases', async () => {
        const res = await request(app).get('/purchase');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});

describe('GET /purchase/:pid', () => {
    it('should return the specific purchase', async () => {
        const res = await request(app).get(`/purchase/${testPid}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.pid).toEqual(testPid);
    });
});

describe('PUT /purchase/:pid', () => {
    it('should update the specific purchase', async () => {
        const newAmount = 200;
        const newCid = 2;
        const res = await request(app).put(`/purchase/${testPid}`).send({
            cid: newCid,
            amount: newAmount,
        });
        expect(res.statusCode).toEqual(204);

        // Check if the purchase was updated correctly
        const getRes = await request(app).get(`/purchase/${testPid}`);
        expect(getRes.body.cid).toEqual(newCid);
        expect(getRes.body.amount).toEqual(newAmount);
    });
});

describe('DELETE /purchase/:pid', () => {
    it('should delete the specific purchase', async () => {
        const res = await request(app).delete(`/purchase/${testPid}`);
        expect(res.statusCode).toEqual(204);

        // Check if the purchase was deleted
        const getRes = await request(app).get(`/purchase/${testPid}`);
        expect(getRes.statusCode).toEqual(404);  // It should return a 404 since the purchase was deleted
    });
});