import express from 'express';
const router = express.Router();
import {
  getItems,
  createItem,
  getItem,
  deleteItem,
  updateItem,
} from '../controllers/items.js';

//@route GET items/
//@desc Get all items
//@access Public
router.get('/', getItems);

// create an item
router.post('/', createItem);

// get item by id.
router.get('/:id', getItem);

// delete an item by id.
router.delete('/:id', deleteItem);

// update an item by id.
router.patch('/:id', updateItem);

export default router;
