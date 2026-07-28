/*
Generate an image using OpenAI Images API (gpt-image-1).
Requires Node 18+ (global fetch) and OPENAI_API_KEY in environment.
Saves output to `src/assets/gta_city_ai_generated.png`.

Usage:
  Windows (PowerShell):
    $env:OPENAI_API_KEY="sk-..."; node scripts/generate_image_openai.js
  Linux/macOS:
    OPENAI_API_KEY="sk-..." node scripts/generate_image_openai.js
*/

import fs from 'fs'
import path from 'path'

const OUT_PATH = path.resolve('./src/assets/gta_city_ai_generated.png')
const PROMPT_PATH = path.resolve('./src/assets/gta_ai_prompt.txt')

const apiKey = process.env.OPENAI_API_KEY
if (!apiKey) {
  console.error('ERROR: Set OPENAI_API_KEY environment variable with your OpenAI key')
  process.exit(1)
}

const prompt = fs.readFileSync(PROMPT_PATH, 'utf-8')

async function main() {
  console.log('Generating image with OpenAI Images API...')
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt: prompt,
      size: '1024x1024',
      n: 1,
    }),
  })

  if (!res.ok) {
    const txt = await res.text()
    console.error('Image generation failed:', res.status, txt)
    process.exit(1)
  }

  const data = await res.json()
  const b64 = data.data?.[0]?.b64_json
  if (!b64) {
    console.error('Unexpected response format', JSON.stringify(data, null, 2))
    process.exit(1)
  }

  const buffer = Buffer.from(b64, 'base64')
  fs.writeFileSync(OUT_PATH, buffer)
  console.log('Saved generated image to', OUT_PATH)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
