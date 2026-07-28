Generar imagen IA (OpenAI)

1) Requisitos
- Node 18+ (para `fetch` global) o instalar `node-fetch` si usas Node <18
- Tener la variable de entorno `OPENAI_API_KEY` con tu clave

2) Comando (Linux/macOS)

```bash
OPENAI_API_KEY="sk-..." node scripts/generate_image_openai.js
```

Windows PowerShell:

```powershell
$env:OPENAI_API_KEY = "sk-..."; node scripts/generate_image_openai.js
```

3) Resultado
- La imagen se guardará en `src/assets/gta_city_ai_generated.png`
- Luego puedes actualizar `src/index.css` para usar `url('/src/assets/gta_city_ai_generated.png')` como background si lo prefieres.

Si quieres, genero un script alternativo para Replicate o un `curl` para la API de OpenAI en vez del script Node.
