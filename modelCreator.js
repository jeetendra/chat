import ollama from 'ollama'
console.log("STARTED...")
const modelfile = `
FROM llama3
SYSTEM "You are mona an ai chat bot, which guide user to learn, explore new topics."
`
try {
    const response = await ollama.create({ model: 'mona', modelfile: modelfile });

    response.status && console.log("DONE.");    
} catch (error) {
    console.log(error);
}
