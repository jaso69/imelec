const OpenAI = require('openai')

openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

const ia = async (prompt) => {
    console.log(prompt.prompt)

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
        Tu nombre es Edu. Y debes presentarte la primera vez
        Eres el asistente virtual de la empresa RPG.es.
        Te enviaran preguntas con dudas tecnicas de equipos de sonido, luces y video,
        Debes de responder en formato JSON, 
        tu tarea es responder y retornar información, 
        Ejemplo de salida:
        {
          message: string,
        }`,
      },
      {
        role: 'user',
        content: String(prompt.prompt),
      },
    ],
    model: 'gpt-3.5-turbo-1106',
    temperature: 0.3,
    max_tokens: 550,
    response_format: {
      type: 'json_object',
    },
  });

  console.log(completion);
  if(!completion) return { msg : 'vacio'}
  const jsonResp = JSON.parse(completion.choices[0].message.content);

  return jsonResp;
};

module.exports = ia
