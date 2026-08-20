# Prototype — "Co-op Canvas" (frozen concept proof)

This is the **standalone concept prototype** for the homepage hero: an AI agent assembles
a Figma-like canvas, then hands off draggable physics "frames," with click-to-open case
studies (a zoom "reader"), a proactive agent, and a hidden/custom cursor.

- Open `hero.html` directly in a browser (desktop) to play with it.
- It is **self-contained** (no build, no dependencies; fonts from Google Fonts).
- It uses **placeholder** projects and fake data — it exists to prove the *feel*.

## Status
Frozen reference. The real hero is being rebuilt as an Astro component
(`src/components/CanvasHero.astro`) wired to the real `work` content collection. Keep this
file as the design/interaction reference; don't wire it into the live site.

Live artifact version: https://claude.ai/code/artifact/e58df4b7-63c1-4b2b-8598-f78a982c1872
