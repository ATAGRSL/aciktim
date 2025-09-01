import { GoogleGenAI, Type } from "@google/genai";
import type { MenuItem, RecommendationResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getMenuRecommendation = async (userInput: string, menuData: MenuItem[]): Promise<RecommendationResponse> => {
  const menuString = menuData.map(item => `${item.name}: ${item.description}`).join('\n');
  
  const prompt = `You are a helpful and enthusiastic menu advisor for a restaurant called "ACIKTIM".
A customer has a request: "${userInput}".
Based on this request and the menu provided below, please suggest 2-3 items. For each suggestion, provide a brief, appetizing reason why it's a good choice.
Respond in Turkish with ONLY a JSON object that follows the schema. Do not include any other text or markdown formatting.

Here is the menu:
${menuString}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendations: {
              type: Type.ARRAY,
              description: "A list of menu item recommendations.",
              items: {
                type: Type.OBJECT,
                properties: {
                  name: {
                    type: Type.STRING,
                    description: "The name of the recommended menu item."
                  },
                  reason: {
                    type: Type.STRING,
                    description: "An appetizing reason why this item is recommended for the user."
                  }
                },
                required: ["name", "reason"]
              }
            }
          },
          required: ["recommendations"]
        }
      }
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText);

  } catch (error) {
    console.error("Error fetching menu recommendations:", error);
    throw new Error("Şu anda tavsiye veremiyorum. Lütfen daha sonra tekrar deneyin.");
  }
};