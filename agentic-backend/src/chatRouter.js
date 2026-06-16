const express = require('express');
const router = express.Router();
const GeminiProvider = require('./geminiProvider');


router.post('/chat', async (req, res, next) => {
    console.log(req.body);
  const { message } = req.body;
  if (!message) {
    next(new Error('Message is required'));
  }
  const geminiProvider = new GeminiProvider(process.env.GEMINI_API_KEY, 
    process.env.GEMINI_MODEL);
  const response = await geminiProvider.generateText(message);
  res.json({ response });
});

module.exports = router;