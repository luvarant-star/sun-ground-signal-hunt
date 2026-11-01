# Gameplay and layout QA — Sun Ground: The Magical Skull

**Reviewed 2026-11-01**

- The level name, navigation, song link, pause button, status, and touch controls sit outside the canvas. The ten-card level strip and objective banner no longer cover the playfield.
- At a 1280 × 720 browser viewport, the game canvas, status row, touch controls, and instructions fit without page scrolling.
- The music player opens below the canvas and keeps the current level’s Bandcamp track. The optional Bandcamp support link remains on the home screen.
- Boss health appears in the status row during the encounter. The instructions explain ranged shots (`C` / `SHOOT`), close punches (`X` / `PUNCH`), avoiding attacks, and the glowing bridge switch (`E` / `USE`).
- Levels now include 30 skull pickups, five pulse-ammo cells, and a switch that raises the first pit bridge. Mobile includes matching touch actions.
- The camera follows with easing; starting a level draws the first frame immediately. Page scroll restoration starts at the top and normal scrolling is smooth.

**Verification**

- `node --check app.js` passes.
- The local gameplay smoke test passes across all ten levels, Bandcamp mappings, start and movement, touch input, pause and resume, collectibles, switch activation, ranged and melee boss damage, progression, retry, and saved progress.
- The local browser preview was checked at 1280 × 720: the playfield is clear, the controls and instructions are visible, and the page height equals the viewport.

**Reference**

- The original visual reference is the attached 1280 × 720 pixel-art screen. The game scene continues to use the generated cosmic desert, hero, enemy, collectible, and skull artwork.
