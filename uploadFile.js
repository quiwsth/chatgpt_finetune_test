require('dotenv').config();

const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function createFile(){
    const response = await openai.createFile(
        fs.createReadStream("data5.jsonl"),
        "fine-tune"
      );
      console.log(response.data)
}

createFile()