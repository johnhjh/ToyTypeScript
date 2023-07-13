// app.ts
/**
 * Express server application class.
 * @returns {Object} Express application.
 */
import express from 'express';
import purchaseRoutes from './routes/purchaseRoutes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

// Use the purchase routes for requests that start with '/purchase'
app.use('/purchase', purchaseRoutes);

export default app;
