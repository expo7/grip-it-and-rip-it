# Grip It and Rip It

A responsive, single-page food truck website prototype for Dan's Austin business. It includes a mobile navigation menu, interactive menu categories, order-ahead waitlist dialog, newsletter confirmation, current location, and catering contact link.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (normally `http://localhost:5173`). Use `npm run build` to create a production build in `dist/`, and `npm run preview` to check that build locally.

## Content updates

- Update menu item names, descriptions, and prices in `index.html`.
- Update the weekly location and schedule in the `#find-us` section.
- The mailto and map links are intentionally visible placeholders for the business's final contact details.

The forms provide a front-end confirmation only; connect them to an email platform or API before collecting real customer information.
