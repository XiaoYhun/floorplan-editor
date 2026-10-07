# Floor Plan Editor — take-home task

This is a small React + TypeScript app that renders and edits a 2D floor plan.
It works at first glance — but QA has filed three bug tickets, and product wants
one new feature. Fix the tickets, ship the feature, and tell us what else
you noticed along the way.

## Setup

```bash
npm install
npm run dev        # http://localhost:5173
npm run test       # unit tests (vitest)
```

Node 20+ recommended.

## The feature: T-junction snapping

While dragging a wall endpoint, it should be possible to attach it to the
body of another wall, forming a T-junction:

- if the dragged endpoint comes within **12 screen pixels** of another
  wall's centerline — not just its endpoints — snap it onto the nearest
  point of that centerline;
- endpoint-to-endpoint snapping must still win when both are in range;
- it must work the same at every zoom level;
- the wall being dragged never snaps to itself.

## The tickets

- **T1** — Snapping while dragging an endpoint works fine zoomed in, but is
  nearly impossible to trigger when zoomed out.
- **T2** — The side panel doesn't look like it should, and edits to
  `Editor.css` don't seem to have any effect on it.
- **T3** — The thickness input in the side panel drops focus after every
  keystroke.

## Ground rules

- `NOTES.md`: what you fixed and why it was broken, and anything else you
  noticed in the code but didn't touch.
- Fixes should be surgical — don't rewrite the app.
- AI tools are allowed. There's a walkthrough call afterwards where we go
  through your changes together; be ready to explain and defend every line.

## Deliverable

A repo link or a zip of the project.
