import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export const fetchMood = async(text: string) => {
    return await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `The CSS code for a color like a ${text}:\n\nbackground-color: #`,
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: [";"],
      });
}