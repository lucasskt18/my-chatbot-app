import express from "express";
import { getChatbotResponse } from "../../services/openaiService";

const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const reply = await getChatbotResponse(message);
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao obter resposta do chatbot." });
  }
});

export default router;
