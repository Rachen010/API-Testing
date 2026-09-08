const Item = require('../models/itemModel');

exports.getAll = (req, res) => {
  res.json(Item.getAll());
};

exports.getById = (req, res) => {
  const item = Item.getById(parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
};

exports.create = (req, res) => {
  const item = Item.create(req.body);
  res.status(201).json(item);
};

exports.update = (req, res) => {
  const item = Item.update(parseInt(req.params.id), req.body);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  const ok = Item.remove(parseInt(req.params.id));
  if (!ok) return res.status(404).json({ error: 'Not found' });
  res.status(204).send();
};
