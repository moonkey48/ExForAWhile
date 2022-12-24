import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export const fetchImage = async(text: string) => {
    return await openai.createImage({
        prompt: text,
        n: 10,
        size: "256x256",
    });
}