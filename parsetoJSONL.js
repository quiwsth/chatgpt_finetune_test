const fs = require('fs');
const csv = require('csv-parser');
let results = []
let intents = {}
fs.createReadStream('./intents - Sheet 2.csv')
    .pipe(csv({
        headers: false
    }))
    .on('data', (data) => {
        results.push({
            intent : data[0],
            sample : data[1]
        })
    })
    .on('end', async () => {
        results.forEach(data=>{
            let foundIntent = intents.hasOwnProperty(data.intent)
            if(foundIntent){
                intents[data.intent].push(data.sample)
            }else{
                intents[data.intent] = [data.sample]
            }
        })
        let keys = Object.keys(intents);
        // {"prompt":"Company: BHFF insurance\nProduct: allround insurance\nAd:One stop shop for all your insurance needs!\nSupported:", "completion":" yes"}
        // {"prompt":"Company: Loft conversion specialists\nProduct: -\nAd:Straight teeth in weeks!\nSupported:", "completion":" no"}

        // keys.forEach(key=>{
        //     let payload = `{"prompt":"${intents[key].join('\\n')}\\n\\n###\\n\\n", "completion":"${key} END"}\n`
        //     fs.appendFileSync('./data6.jsonl', payload);
        // })

        for await (const [i, v] of results.entries()) {
            let payload = `{"prompt":"${v.sample}\\n\\n###\\n\\n", "completion":"${v.intent} END"}\n`
            console.log(payload)
            fs.appendFileSync('./data8.jsonl', payload);
        }
    });
