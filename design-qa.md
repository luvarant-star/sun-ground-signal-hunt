# Design QA — Sun Ground: The Magical Skull

**Findings**

- No actionable P0, P1, or P2 visual issues remain at the reviewed desktop and mobile sizes.
- [P3] The display lettering uses a beveled system font rather than the reference’s custom angular logo type. Keep the readable title; a licensed pixel/futuristic display face could improve fidelity later.
- [P3] The ten level cards use different crops and tints from one panorama. The playable worlds share the reference’s cosmic desert art direction; bespoke track-specific scenery could add more variety later.

**Comparison target and evidence**

- Source visual truth: `C:/Users/luvar/Documents/Codex/2026-11-01/referenced-chatgpt-conversation-this-is-an/.codex-attachments/d52b1716-790f-419e-a38a-ad68854eff12/8f4f806c-14cb-496e-bef5-a116cfc68ee6/1000148909.png`.
- Source image dimensions: 1280 × 720 px.
- Implementation capture: CUA browser screenshot of `http://localhost:4173/`, level 1 in its opening run state. The browser tool exposed the screenshot for visual comparison but did not provide a local PNG export path.
- Implementation viewport and screenshot dimensions: 1280 × 720 CSS px / 1280 × 720 px. Both images were compared at equal dimensions and 1:1 scale; no density resampling or browser chrome was included.
- Responsive check: CUA browser capture at 390 × 844 CSS px. Five level cards are visible and the rest remain horizontally scrollable; touch controls and the optional Bandcamp support link remain below. The active song player opens inside the game HUD.
- State: first level, three lives, no completed levels, player shown in the initial run animation.
- Full-view comparison: the cosmic sky, orange sun, carved stone face, arch, city, foreground pits, robot, skull shrine, HUD, ten-card row, and Italian objective appear in the same overall arrangement and palette as the reference.
- Focused region comparison: the same 1:1 full-view capture clearly shows the hero silhouette and clothing, title treatment, portrait/lives/skull HUD, level cards, and objective. No extra crop was needed at 1280 × 720.
- Five fidelity surfaces: typography remains an approximation of the reference logo (P3); card spacing and scale align with the lower reference row; violet/orange palette and pixel-art imagery match; generated panorama/hero/enemy assets render sharply; the ten official track titles and Italian skull objective are present. The HUD music popover replaces the oversized player below the game.
- Interaction evidence: game smoke test covers all ten worlds, unlock progression, keyboard and touch movement, pause/resume, collectibles, boss combat, completion, saving, next level, and retry. All ten Bandcamp track embeds return successfully; the official embed showed the track-specific play control and changed to pause after playback began. The HUD SONG button opens the compact player in place. The Web Audio effects synthesize low-volume arcade tones for jumping, punches, collectibles, enemy/boss hits, damage, and level clears.

**Comparison history**

1. The first full-size comparison showed a narrow idle hero and a shorter level-card row set too low. The opening animation now uses a running pose, and the card art and row position were enlarged and moved upward. The revised 1280 × 720 capture aligns the hero and card row more closely with the reference.
2. The first title treatment was visually flat. It now has a bright silver face and blue-violet bevel; the revised capture restores strong contrast and a closer metallic appearance.
3. A vertical scrollbar appeared in one desktop capture. The game view now hides the scrollbar; the latest capture shows the full-width game view cleanly, with the song player tucked into the HUD instead of taking space below the game.

**Open Questions**

- Bandcamp’s embedded player requires tapping its native ▶ control. Browser autoplay is not reliable without a user gesture.

**Implementation Checklist**

- [x] Match the hero’s black outfit, sunglasses, running pose, cosmic desert, foreground platforms, robot, collectibles, and golden skull.
- [x] Show the ten tracks in the reference order with the matching official Bandcamp embed inside a compact HUD player.
- [x] Keep keyboard and mobile touch controls, progression, and optional Bandcamp support.
- [x] Validate the gameplay smoke test and compare the implementation to the source at matching desktop dimensions.

**Follow-up Polish**

- Consider track-specific scenery and a bespoke angular display font if the visual identity needs another iteration.

**Final result: passed**
