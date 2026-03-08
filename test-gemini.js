const { streamText } = require('ai');
const { google } = require('@ai-sdk/google');
const apiKey = "AIzaSyCeU8Po2tCLITjT320Ey6i1IBmEE6f-mSk";
process.env.GOOGLE_GENERATIVE_AI_API_KEY = apiKey;
streamText({ model: google('models/gemini-3-flash-preview'), prompt: 'hi' })
  .then(r => console.log('success'))
  .catch(e => console.error(e.message));
