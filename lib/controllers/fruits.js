const { Router } = require('express');
const Fruit = require('../models/Fruit');
const router = Router();

router
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    console.log(req.params.id);
    const fruit = await Fruit.getById(req.params.id);
    res.json(fruit);
  })
  .get('/', async (req, res) => {
    const fruits = await Fruit.getAll();
    const ids = fruits.map((fruit) => ({ id: fruit.id, name: fruit.name, color: fruit.color }));
    console.log(ids);
    res.json(ids);
  });

module.exports = router;
