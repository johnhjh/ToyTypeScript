// purchaseController.ts
/**
 * Controller for purchase endpoints of the API.
 * @module purchaseController
 */
import { Request, Response } from 'express';
import * as PurchaseModel from '../models/purchaseModel';

/**
 * Returns a list of all purchases.
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const getPurchases = async (req: Request, res: Response) => {
  try {
    const purchases = await PurchaseModel.getPurchases();
    return res.status(200).json(purchases);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

/**
 * Returns the specific purchase with the given pid.
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const getPurchase = async (req: Request, res: Response) => {
  try {
    const purchase = await PurchaseModel.getPurchase(req.params.pid);
    if (purchase !== null)
      return res.status(200).json(purchase);
    else
      return res.status(404).end();
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

/**
 * Creates a new purchase and returns the pid of the new purchase.
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const createPurchase = async (req: Request, res: Response) => {
  try {
    const pid = await PurchaseModel.createPurchase(req.body);
    return res.status(201).json({ pid });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

/**
 * Updates the specific purchase with the given pid.
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const updatePurchase = async (req: Request, res: Response) => {
  try {
    await PurchaseModel.updatePurchase(req.params.pid, req.body);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

/**
 * Deletes the specific purchase with the given pid.
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const deletePurchase = async (req: Request, res: Response) => {
  try {
    await PurchaseModel.deletePurchase(req.params.pid);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
