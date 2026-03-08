const { streamText } = require('ai');
const { google } = require('@ai-sdk/google');
const r = streamText({ model: google('gemini-1.5-flash'), prompt: 'hi' });
console.log(Object.keys(r));
