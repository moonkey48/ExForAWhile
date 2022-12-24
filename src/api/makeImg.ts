import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export const fetchImage = async(text: string) => {
    return await openai.createImage({
        prompt: text,
        n: 1,
        size: "1024x1024",
    });
}