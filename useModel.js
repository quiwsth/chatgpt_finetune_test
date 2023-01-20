require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function useModel() {
  const response = await openai.createCompletion({
    model: "curie:ft-personal-2023-01-20-03-54-50",
    prompt: "google",
    temperature: 1,
    max_tokens:200
  });
  console.log(response.data)
}

useModel()