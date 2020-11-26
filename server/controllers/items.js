import mongoose from 'mongoose';
import Item from '../models/item.js';
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
    const results = await newItem.save();
    res.status(201).json(results);
    console.log('create', results);
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

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) {
    return res.status(400).json({ error: 'invalid id' });
  }

  try {
    const result = await ItemModel.findByIdAndDelete(id);
    res.status(200).json({
      'message': 'item deleted',
      'item': result,
    });
  } catch (error) {
    return res.status(401).send(error);
  }
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const item = req.body;
  if (!isValidId(id)) {
    return res.status(400).send('Invalid id');
  }

  try {
    const updatedItem = await ItemModel.findByIdAndUpdate(id, item);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};
