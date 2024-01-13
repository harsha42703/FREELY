const express = require('express');
const { userMiddleware } = require('../middlewares');
const { getOrders } = require('../controllers/order.controller');
const app = express.Router();

// Get all
app.get('/', userMiddleware, getOrders);

module.exports = app;