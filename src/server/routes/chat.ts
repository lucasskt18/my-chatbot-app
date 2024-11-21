import express from 'express';
import { getChatbotResponse } from '../../services/openaiService';

const router = express.Router();

router.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await getChatbotResponse(message);
    res.json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao processar a mensagem' });
  }
});

export default router;
