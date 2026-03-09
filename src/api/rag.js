import axios from "axios";

export const generateRAG = async (query) => {
  const response = await axios.post(
    "http://localhost:5000/api/rag/generate",
    { query }
  );

  return response.data;
};