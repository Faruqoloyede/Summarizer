import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function summarizeText(text: string) {
  const prompt = `Summarize the following text clearly and concisely:\n\n${text}`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", // or "gpt-4o" if you have access
    messages: [
      { role: "system", content: "You are a helpful assistant that summarizes text." },
      { role: "user", content: prompt },
    ],
  });

  return response.choices[0].message?.content || "";
}
