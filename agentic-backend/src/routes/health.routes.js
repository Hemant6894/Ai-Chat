const { Router } = require('express');

const router = Router();

router.get('/', (_req, res) => {
  res.json({ status: 'ok', message: 'Agentic backend is running' });
});

module.exports = router;
