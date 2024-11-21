import axios from "axios";

// Definindo a interface para a resposta da API
interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const getChatbotResponse = async (message: string): Promise<string> => {
  const response = await axios.post<OpenAIResponse>(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    },
    {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
};
