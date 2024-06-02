import ollama from 'ollama'

export async function chat(messages) {
  const response = await ollama.chat({
    model: 'mona',
    format: "json",
    messages,
  })
  return response;
}
