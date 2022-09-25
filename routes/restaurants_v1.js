import express from 'express';
import query from '../db/index.js';

const router = express.Router();

//Get all restaurants
router.route('/').get(async (req, res) => {
  try {
    const results = await query('SELECT * FROM restaurants;');
    res.status(200).json({
      message: 'success',
      results: results.rowCount,
      data: results.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

//Get one restaurant
router.route('/:id').get(async (req, res) => {
  try {
    const id = req.params.id;
    const results = await query('SELECT * FROM restaurants WHERE id = $1', [
      id,
    ]);
    res.status(200).json({
      message: 'success',
      data: results.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

//Create a restaurant
router.route('/').post(async (req, res) => {
  try {
    console.log(req.body);
    const results = await query(
      'INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *;',
      [req.body.name, req.body.location, req.body.price_range]
    );

    console.log(results);
    res.status(201).json({
      message: 'success',
      data: results.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

//Update a restaurant
router.route('/:id').put(async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.body);
    const results = await query(
      'UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *;',
      [req.body.name, req.body.location, req.body.price_range, id]
    );

    res.status(200).json({
      message: 'success',
      data: results.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

//Delete a restaurant
router.route('/:id').delete(async (req, res) => {
  try {
    const id = req.params.id;
    const results = await query('DELETE FROM restaurants WHERE id = $1', [id]);

    res.status(201).json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
