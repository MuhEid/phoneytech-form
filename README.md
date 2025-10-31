PhoneyTech Form is a Next.js (App Router) frontend for a phone‑repair intake form. It collects customer and device details, selected repairs/accessories, and submits to a backend at `http://localhost:5000/api` where a PDF is generated and an email is sent.

## Quick Start

-   Install deps: `npm install`
-   Run dev server: `npm run dev`
-   Open: `http://localhost:3000`

Environment config comes from `.env.local` (see Environment below). The frontend expects a Flask backend running locally on port 5000 with routes like `/api/submit`.

## Project Structure

-   `src/app`
    -   `layout.tsx`: Global layout wrapper.
    -   `globals.css`: Tailwind base/styles.
    -   `page.tsx`: Empty home route.
    -   `form/page.tsx`: Main repair form page — holds local form state and submission logic.
    -   `terms/page.tsx`: Renders Terms & Conditions page.
-   `src/components`
    -   `Form.tsx`: The main composed form UI (inputs, sections, validation toggles).
    -   `Logo.tsx`: Brand logo component.
    -   `form-components/`
        -   `InputField.tsx`: Reusable input with optional euro suffix.
        -   `DropdownMenu.tsx`: Accessory selector with dynamic pricing and list management.
        -   `RepairsToBeMade.tsx`: Checkbox list builder for repair/test selections.
        -   `ConfirmAndSign.tsx`: Terms confirmation, date, signature display, optional notes.
        -   `DeviceMockup.tsx`, `LockPattern.tsx`, `TermsAndConditions.tsx`: UI helpers/visuals.
-   `src/types.ts`: Shared TypeScript types, including `FormData`.
-   `src/utils.ts`: Utility functions, including `generateOrderId()` helper.

## Components & State Management

State management is handled at the page level in `src/app/form/page.tsx`:

-   Manages the working copy of the form via `useState` and passes state + handlers down to `Form.tsx`.
-   Imports the `FormData` type from `src/types.ts` (shared source of truth).
-   Handles submission: generates `orderId`, reads `NEXT_PUBLIC_API_URL`, posts to `/submit`, and triggers PDF download when `download_url` exists.

The `Form.tsx` component receives all data/handlers via props and coordinates UI subcomponents:

-   Tracks UI‑only state: water damage selection, selected repairs, selected accessories, agreement checkbox, deposit, etc.
-   Propagates non‑input selections upward through `handleNoneInputFields` so the page/state can capture checkbox and dropdown changes.
-   Computes totals client‑side (e.g., `totalAccessoryPrice`) and renders a summary.
-   Imports the `FormData` type from `src/types.ts`.

## Submission Flow

1. User completes the form on `src/app/form/page.tsx` via `Form.tsx` and subcomponents.
2. On submit, `orderId` is generated using `generateOrderId()` from `src/utils.ts`.
3. The page posts JSON to `${NEXT_PUBLIC_API_URL}/submit` (Flask backend).
4. On success, a success message is shown, and if a `download_url` is provided, the browser is redirected to download the generated PDF.

## Environment

Define the following in `.env.local`:

-   `NEXT_PUBLIC_API_URL` — e.g. `http://localhost:5000/api`

Important: avoid committing real credentials to version control. Consider `.gitignore` rules and environment managers for production.

## Development

-   Dev: `npm run dev`
-   Build: `npm run build`
-   Start (production): `npm start`

If deploying behind a process manager (e.g., pm2 on a server):

-   `pm2 list` to view processes
-   `npm run build` to rebuild the frontend
-   `pm2 restart <id-or-name>` to restart

## Potential Enhancements

-   Form validation:
    -   Introduce `react-hook-form` + `zod` or built‑in validation to enforce required fields and formats (phone, email, numbers).
-   UX polish:
    -   Loading/disabled states on submit; inline error messages from the API; success banner with order ID; keep or clear state post‑submit based on a UX decision.
-   Pricing and totals:
    -   Derive `totalPrice` from selected items + deposit on the fly; consider a reducer for pricing logic to avoid duplication across components.
-   API contracts:
    -   Document response/shape from `/api/submit` (e.g., `submission_text`, `download_url`). Add runtime guards when parsing.
-   Security:
    -   Remove secrets from `.env.local` in VCS; use environment injection in deployments.

## Backend Expectations

The Flask backend (separate from this repo) should expose:

-   `POST /api/submit` — accepts the full form payload; returns success text plus `download_url` if a PDF is ready for download.
