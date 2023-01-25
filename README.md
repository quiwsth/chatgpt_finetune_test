npm i

# chatgpt_finetune_test

Set .env for OPENAI_API_KEY first and then

1. Create your train-set JSONL
example parsetoJSONL.js

2. use JSONL upload to Openai
example uploadFile.js

3. Use file-id from Openai train fine-tune model
example createFineTune.js

4. Check status ['pending' , 'failed' , 'succeed'] after send train-set to Openai
example getListFineTune.js

5. Use your model
exmaple useModel.js

node ./{{Script}}.js
