// Pre-defined keys in a shuffled order
const predefinedKeys = [
  "Awq_x7e2Hj9Q", "Awq_98DjR3Lm", "Awq_Jd4Hf8Ty", "Awq_Yk6Lp5Mz", 
  "Awq_Pq2Hd9Tk", "Awq_Rm8Ty4Lp", "Awq_32KjX9Hp", "Awq_W7T4Lm9Q", 
  "Awq_X9Hd3Lp8", "Awq_5Rm2Ty7Q", "Awq_N7X2Hk4T", "Awq_Z8Lp5Ty9R", 
  "Awq_Hp3Jk9X2", "Awq_4W8Rm2Ty", "Awq_M6Hd9Q5L", "Awq_Lp7X9Ty2R", 
  "Awq_Tk3Rm9Hd", "Awq_Y7L5Hd2K", "Awq_98W4X3Hp", "Awq_R5Ty7Lp3K", 
  "Awq_K9Rm4Hd7T", "Awq_2X3Ty5Lp", "Awq_6Hd8W9Jk", "Awq_T4Rm7Hp9L", 
  "Awq_L9X2Hd3K", "Awq_H7W5Ty8Jk", "Awq_P2Rm9L4T", "Awq_J3Hd8Ty7X", 
  "Awq_98Lp4K7Rm", "Awq_5Hd2Ty9W3", "Awq_T7Rm6Hd9Q", "Awq_X4Lp8W2Ty", 
  "Awq_3K9Ty5Hd8L", "Awq_R2Hd4Lp9X", "Awq_J7Ty6Rm8Hp", "Awq_5Hd9L4Ty7K", 
  "Awq_K2Lp7Rm9W4", "Awq_9X3Ty5Hd8R", "Awq_W7Ty6Hd9Lp", "Awq_M5Lp9W8Ty4", 
  "Awq_L7Hd8W9Ty2", "Awq_H2Ty5Rm8Lp", "Awq_6Lp9W7Ty8Hd", "Awq_T3Rm9Hd4Lp", 
  "Awq_P8Ty7Hd6W9K", "Awq_J9Ty4Rm7Lp2", "Awq_Lp7Hd6Ty8W9R", "Awq_W8Lp9Ty5Hd7", 
  "Awq_6Hd7Lp9Ty4W8", "Awq_5Rm9W8Ty7Hd2", "Awq_J7Ty6Hd8Rm9L", "Awq_L9Hd7W5Ty2K", 
  "Awq_H8Ty7Rm9Lp3W", "Awq_P9Ty4Hd7Rm6L", "Awq_T7Rm9Lp4W8Hd", "Awq_J6Hd8Ty9W7L5", 
  "Awq_Rm7Lp9Ty5Hd8W", "Awq_98Ty4Rm7Hd9L", "Awq_T5Hd9W7Rm6Lp", "Awq_X7Ty9Hd8Lp5Rm", 
  "Awq_3K7Rm9Lp4W8Ty", "Awq_W9Hd7Ty6Lp8Rm", "Awq_7Hd9Ty5Lp3W8Rm", "Awq_T8Rm9W5Lp7Hd6", 
  "Awq_J5Ty7Rm8Lp9W6", "Awq_9Ty7Hd6Rm5Lp8W", "Awq_L5Rm9Hd7Ty8W6", "Awq_X9Hd7Ty5Lp8Rm", 
  "Awq_T8Hd9W5Rm7Lp6", "Awq_Rm5Hd9Ty7W8Lp6", "Awq_Hd9Ty7Lp5W6Rm8", "Awq_Ty5Rm9Hd7Lp8W6", 
  "Awq_Lp7Rm9Hd8W5Ty6", "Awq_W5Rm9Ty7Hd8Lp6", "Awq_H8Ty9Rm5Lp7W6", "Awq_X9Ty7Lp5Rm8Hd6", 
  "Awq_M5Lp8Ty7Rm9W6Hd", "Awq_Rm9Ty7Lp8Hd6W5", "Awq_Ty9Hd8W6Rm5Lp7", "Awq_P8Ty5Rm9Hd7W6Lp", 
  "Awq_J7Rm9Ty5Lp6Hd8W", "Awq_L8Ty7Rm5Hd9W6Lp", "Awq_X5Lp9Ty7Hd8Rm6W", "Awq_98Hd7Ty5Lp6Rm9W", 
  "Awq_W7Ty9Hd6Lp5Rm8", "Awq_Lp8Rm9Ty5W7Hd6", "Awq_Ty7Hd8Rm5Lp9W6", "Awq_5Rm8Hd7Ty9W6Lp", 
  "Awq_Hd9Ty6Rm8Lp7W5", "Awq_T5Rm8Hd9W7Lp6Ty"
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Return the shuffled keys as the response
    return res.status(200).json({
      message: "Here are 100 keys in the Awq_<key> format.",
      keys: predefinedKeys
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
