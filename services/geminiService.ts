import { GoogleGenAI } from "@google/genai";

// FIX: Created the Gemini service to handle API calls for itinerary generation.
// This service assumes the API_KEY is set in the environment.
const apiKey = process.env.API_KEY;

// A basic check to avoid runtime errors if the key is missing.
if (!apiKey) {
    console.error("API_KEY environment variable is not set. The application may not function correctly.");
}

const ai = new GoogleGenAI({ apiKey: apiKey! });

export const generateItinerary = async (days: number, interests: string, city: string): Promise<string> => {
  if (!apiKey) {
    return "API anahtarı yapılandırılmadığı için seyahat planı oluşturulamıyor.";
  }
  
  const prompt = `${city} şehrinde ${days} günlük bir seyahat planı oluştur. İlgi alanlarım: ${interests}. Planı günlere ayırarak ve her gün için önerilen aktiviteleri listeleyerek Markdown formatında sun. Önemli yerleri kalın harflerle belirt. Örneğin: **Anıtkabir**.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating itinerary with Gemini API:", error);
    throw new Error("Yapay zeka ile seyahat planı oluşturulurken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
  }
};
