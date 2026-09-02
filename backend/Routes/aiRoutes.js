const express = require('express');
const router = express.Router();
const { GoogleGenAI } = require('@google/genai');

router.post('/generate-recipe', async (req, res) => {
  try {
    const { ingredients, cuisine, dishName } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(400).json({
        error: "GEMINI_API_KEY is not configured. Please add GEMINI_API_KEY=your_key in backend/.env to generate live AI recipes from around the world."
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `You are a master culinary chef specializing in authentic world cuisines.
Generate a complete, delicious, authentic recipe based on:
- Available ingredients: ${ingredients && ingredients.length > 0 ? ingredients.join(', ') : 'Any authentic fresh ingredients'}
- World Cuisine / Region: ${cuisine || 'Global'}
- Requested Dish (optional): ${dishName || 'Chef Choice based on ingredients'}

Return ONLY a valid JSON object matching this exact structure:
{
  "title": "Dish Name with culinary emoji",
  "cuisine": "Country/Region Name",
  "prepTime": "XX mins",
  "cookTime": "XX mins",
  "servings": "X servings",
  "difficulty": "Easy / Medium / Advanced",
  "calories": "XXX kcal",
  "description": "Short appetizing culinary description",
  "ingredients": [
    "Exact measurement and ingredient name",
    "Exact measurement and ingredient name"
  ],
  "instructions": [
    "Step 1: Preparation detail",
    "Step 2: Cooking technique",
    "Step 3: Plating & finishing"
  ],
  "chefTip": "Pro chef secret tip or authentic substitution advice"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text;
    const recipeData = JSON.parse(text);
    return res.json({ success: true, recipe: recipeData });
  } catch (err) {
    console.error("AI Generation error:", err);
    return res.status(500).json({
      error: "AI Recipe Generation failed: " + (err.message || "Unknown error")
    });
  }
});

module.exports = router;
