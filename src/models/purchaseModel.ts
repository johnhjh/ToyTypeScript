// purchaseModel.ts
/**
 * Model for the purchase data of the application.
 * @module purchaseModel
 */
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

const db = new JsonDB(new Config("database", true, false, '/'));

/**
 * Initializes the database.
 */
export const initializeDatabase = async () => {
  try {
    const purchases = await db.getData("/purchase")
    if (typeof purchases === "undefined" || purchases.length === 0) {
      return db.push("/purchase", [], true);
    }
  } catch (error) {
    return db.push("/purchase", [], true);
  }
};

/**
 * Returns all purchases from the database.
 */
export const getPurchases = () => {
  return db.getData('/purchase');
};

/**
 * Returns the specific purchase with the given pid.
 * @param {string} pid - Purchase ID
 */
export const getPurchase = async (pid: string) => {
  const purchases = await db.getData('/purchase');
  if (purchases.length > 0)
    return purchases.find((purchase: { pid: string }) => purchase.pid === pid);
  else return null;
};

/**
 * Creates a new purchase and returns the pid of the new purchase.
 * @param {Object} purchase - Purchase data
 */
export const createPurchase = async (purchase: { cid: string, amount: number, price: number }) => {
  const pid = "pc-" + Date.now().toString();
  const newPurchase = { pid, ...purchase };
  const purchases = await db.getData('/purchase');
  purchases.push(newPurchase);
  await db.push('/purchase', purchases, true);
  return pid;
};

/**
 * Updates the specific purchase with the given pid.
 * @param {string} pid - Purchase ID
 * @param {Object} purchase - Updated purchase data
 */
export const updatePurchase = async (pid: string, purchase: object) => {
  const purchases = await db.getData('/purchase');
  let index = purchases.findIndex((purchase: { pid: string }) => purchase.pid === pid);
  if (index > -1) {
    purchases[index] = { pid, ...purchase };
    return db.push('/purchase', purchases, true);
  } else {
    return null;
  }
};

/**
 * Deletes the specific purchase with the given pid.
 * @param {string} pid - Purchase ID
 */
export const deletePurchase = async (pid: string) => {
  const purchases = await db.getData('/purchase');
  const filteredPurchases = purchases.filter((p: { pid: string }) => p.pid !== pid);
  return db.push('/purchase', filteredPurchases, true);
};
