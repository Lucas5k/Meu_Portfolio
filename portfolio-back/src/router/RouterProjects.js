const { Router } = require('express');

const router = Router();
const ControllerProjects = require('../controller/ControllerProjects');

router.get('/all-Projects', ControllerProjects.find);

module.exports = router;
