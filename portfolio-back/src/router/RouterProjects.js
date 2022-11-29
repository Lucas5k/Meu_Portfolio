const { Router } = require('express');

const router = Router();
const ControllerProjects = require('../controller/ControllerProjects');

router.get('/Projects', ControllerProjects.find);

module.exports = router;
