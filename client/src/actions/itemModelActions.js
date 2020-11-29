import { ItemsModelTyps } from './types';

export const setStatus = (status) => ({
  type: ItemsModelTyps.SET_STATUS,
  payload: status,
});

export const updateModel = (model) => ({
  type: ItemsModelTyps.UPDATE_MODEL,
  payload: model,
});

export const closeModel = () => ({
  type: ItemsModelTyps.CLOSE_MODEL,
});
