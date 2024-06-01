import ollama from 'ollama'

export async function chat(messages) {
  const response = await ollama.chat({
    model: 'llama3',
    format: "json",
    messages,
  })
  return response;
}
