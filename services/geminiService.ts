import { GoogleGenAI } from "@google/genai";
import { FULL_CONTEXT_MATERIAL } from '../constants';

// Initialize Gemini
// Note: In a real production app, this key should be proxy-protected, 
// but for this frontend-only demo, we use the env variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIResponse = async (userQuestion: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        You are an expert presenter and teaching assistant for a presentation about the Solana Blockchain.
        
        Here is the source material for the entire presentation:
        ---
        ${FULL_CONTEXT_MATERIAL}
        ---

        The user is asking a question about this presentation. 
        Answer concisely (under 3 sentences if possible) and professionally. 
        If the answer is not in the context, use your general knowledge about Solana but mention that it wasn't in the slides.
        
        User Question: ${userQuestion}
      `,
    });

    return response.text || "I couldn't generate a response. Please check your connection.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error connecting to the AI assistant. Please ensure your API key is valid.";
  }
};