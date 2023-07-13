// purchaseRoutes.ts
/**
 * Routes for the purchase endpoints of the application.
 * @module purchaseRoutes
 */
import { Router } from 'express';
import * as PurchaseController from '../controllers/purchaseController';

const router = Router();

router.get('/', PurchaseController.getPurchases);
router.get('/:pid', PurchaseController.getPurchase);
router.post('/', PurchaseController.createPurchase);
router.put('/:pid', PurchaseController.updatePurchase);
router.delete('/:pid', PurchaseController.deletePurchase);

export default router;
