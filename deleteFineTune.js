require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function deleteModel(){
    const response = await openai.deleteModel('curie:ft-personal-2023-01-13-18-36-01');
    console.log(response.data)
}

deleteModel()