import mongoose from 'mongoose';
import ItemModel from '../models/item.js';

import { isValidId } from '../utils/routesHelper.js';

export const getItems = async (req, res) => {
  try {
    const items = await ItemModel.find().sort({ date: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ 'error:': error });
    console.log(error);
  }
};

export const createItem = async (req, res) => {
  const item = req.body;
  const newItem = new ItemModel(item);
  console.log(newItem);
  try {
    const results = newItem.save();
    res.status(201).json(results);
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) {
    return res.status(404).json({ error: 'Invalid id' });
  }

  try {
    const item = await ItemModel.findOne({ _id: id });
    res.status(201).json(item);
  } catch (error) {
    res.status(401).send(error);
  }
};
