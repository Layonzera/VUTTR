const { Router } = require('express');

const ToolsController = require('./controllers/ToolsController');

const router = Router();

router.get('/tools', ToolsController.index);
router.get('/tools/:id', ToolsController.show);
router.post('/tools', ToolsController.store);
router.put('/tools/:id', ToolsController.update);
router.delete('/tools/:id', ToolsController.delete);

module.exports = router;
