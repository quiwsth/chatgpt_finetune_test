require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function createFineTune(){
    const response = await openai.createFineTune({
        training_file: "file-iws1rYEjAmHQLGQIMbfV9iuz",
      });
      console.log(response.data)
}
createFineTune()

// {
//     object: 'fine-tune',
//     id: 'ft-n1GWne3710ZdAvjrtAear5cP',
//     hyperparams: {
//       n_epochs: 4,
//       batch_size: null,
//       prompt_loss_weight: 0.01,
//       learning_rate_multiplier: null
//     },
//     organization_id: 'org-nv0N8LHRYX7wUeQ3ogePsozk',
//     model: 'curie',
//     training_files: [ [Object] ],
//     validation_files: [],
//     result_files: [],
//     created_at: 1673632078,
//     updated_at: 1673632078,
//     status: 'pending',
//     fine_tuned_model: null,
//     events: [ [Object] ]
// }