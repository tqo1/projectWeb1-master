'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/school-controller'); //FIX
const authService = require('../services/auth-service');

router.get('/', controller.get);

router.get('/:id',controller.getById);

router.post('/', controller.post);

router.delete('/:id', controller.delete);

module.exports = router;