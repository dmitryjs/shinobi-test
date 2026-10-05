# Shinobi Designer

An English-language Naruto-inspired designer quiz with 12 questions and 22 character matches. Responsive manga design with PNG share cards in 9:16 and 1:1 formats.

## Vercel

Import this repository. Configuration is in `vercel.json`.

- Framework: Other
- Root directory: repository root
- Build command: `node build-reference.mjs`
- Output directory: `dist`
- Environment variables: none

## Local development

Run `python3 -m http.server 8000 --directory dist` and open http://localhost:8000.

## Validation

Run `npm test`.

## Files

`dist/data.js` contains questions and matching profiles; `dist/app.js` contains the interface and share-card export; `dist/style.css` contains responsive styles. `build-reference.mjs` generates the character and methodology page.

Unofficial fan-made experience. Naruto characters belong to their respective rights holders. Designer archetypes are interpretive, not a psychological assessment. Anton font is distributed under the included OFL license.
