import express from 'express';
const router = express.Router();
import { getItems, createItem, getItem } from '../controllers/items.js';

//@route GET items/
//@desc Get all items
//@access Public
router.get('/', getItems);

// create an item
router.post('/', createItem);

// get item by ids
router.get('/:id', getItem);

export default router;
