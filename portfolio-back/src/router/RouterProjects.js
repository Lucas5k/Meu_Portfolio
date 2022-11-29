const { Router } = require('express');

const router = Router();
const ControllerProjects = require('../controller/ControllerProjects');

router.get('/allproject', ControllerProjects.find);

module.exports = router;
