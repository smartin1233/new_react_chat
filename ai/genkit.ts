import {genkit} from 'genkit';
import {openAI} from '@genkit-ai/compat-oai';

export const ai = genkit({
  plugins: [
    openAI({
      apiKey: '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',
      baseUrl: 'https://openrouter.ai/api/v1',
    }),
  ],
  model: 'gpt-4o-mini',
});
