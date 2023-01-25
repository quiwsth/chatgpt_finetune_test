require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function useModel() {
  const response = await openai.createCompletion({
    model: "curie:ft-personal-2023-01-25-16-11-57", // curie:ft-personal-2023-01-25-16-11-57
    prompt: "สวัสดีครับทุกท่าน ผมชื่อคิวมีเรื่องอยากถาม โรงบาลอยู่ไหนอะคับ\n\n###\n\n",
    temperature: 1,
    max_tokens:10,
    echo:false,
    stop: ["END"]
  });
  console.log(response.data)
}

useModel()