class GeminiProvider {
  constructor(apiKey,model) {
    this.apiKey = apiKey;
    this.model = model;

    if (!this.apiKey) {
      throw new Error('API key is required');
    }

    if (!this.model) {
      throw new Error('Model is required');
    }
    this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + this.apiKey;

  }

  async generateText(prompt) {
    const payload = {
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ]
    }
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log('Gemini Response:', JSON.stringify(data, null, 2));
    if (data?.candidates?.length === 0) {
      return 'No response from Gemini';
    }
    return data?.candidates[0].content.parts[0].text || 'No response from Gemini';
  }
}
module.exports = GeminiProvider;