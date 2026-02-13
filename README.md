# Progetto Vue.js 2 – Sunnee Bottle Configurator

Step-by-step configurator built with **Vue.js 3** for Sunnee’s Kids bottle gift.  
Users can customize **cap**, **body**, and **base** colors (10 predefined options) with a **live preview always visible**.

## Live Demo

(Insert your Netlify URL here after deploy)

## Repository

https://github.com/treccaniandrea6-prog/progettovuejs2-sunnee-bottle

---

## Project Requirements Covered

- **10 predefined colors** available to the user
- **Real-time preview** always visible (updates instantly)
- **3-step navigation** with “Next” and final “Send”
- Bonus UX:
  - Welcome page
  - Thank you page with summary + restart

Constraints respected:

- Small number of Vue components (5–6)
- Clean, readable code and short files

---

## Component Structure

- **App.vue**: Global layout + persistent right-side preview
- **Welcome.vue**: Entry page with CTA
- **ConfiguratorStep.vue**: Single reusable step page (cap/body/base) driven by route params
- **ThankYou.vue**: Final confirmation + recap + reset
- **ColorGrid.vue**: Reusable color picker (v-model)
- **BottlePreview.vue**: Bottle preview (cap/body/base)

---

## State Management & Events

Shared state is handled via a composable:

- `useBottleConfig.js` keeps `cap/body/base` in a reactive store
- `ColorGrid` emits `update:modelValue` (v-model)
- The preview reacts automatically through Vue reactivity
- Step navigation is handled by **Vue Router**

---

## Local Setup

```bash
git clone https://github.com/treccaniandrea6-prog/progettovuejs2-sunnee-bottle.git
cd progettovuejs2-sunnee-bottle
npm install
npm run dev
```

Build# Progetto Vue.js 2 – Sunnee Bottle Configurator

Step-by-step configurator built with **Vue.js 3** for Sunnee’s Kids bottle gift.  
Users can customize **cap**, **body**, and **base** colors (10 predefined options) with a **live preview always visible**.

## ✅ Live Demo

(Insert your Netlify URL here after deploy)

## ✅ Repository

https://github.com/treccaniandrea6-prog/progettovuejs2-sunnee-bottle

---

## 🎯 Project Requirements Covered

- **10 predefined colors** available to the user
- **Real-time preview** always visible (updates instantly)
- **3-step navigation** with “Next” and final “Send”
- Bonus UX:
  - Welcome page
  - Thank you page with summary + restart

Constraints respected:

- Small number of Vue components (5–6)
- Clean, readable code and short files

---

## 🧩 Component Structure

- **App.vue**: Global layout + persistent right-side preview
- **Welcome.vue**: Entry page with CTA
- **ConfiguratorStep.vue**: Single reusable step page (cap/body/base) driven by route params
- **ThankYou.vue**: Final confirmation + recap + reset
- **ColorGrid.vue**: Reusable color picker (v-model)
- **BottlePreview.vue**: Bottle preview (cap/body/base)

---

## ⚙️ State Management & Events

Shared state is handled via a composable:

- `useBottleConfig.js` keeps `cap/body/base` in a reactive store
- `ColorGrid` emits `update:modelValue` (v-model)
- The preview reacts automatically through Vue reactivity
- Step navigation is handled by **Vue Router**

---

## 🚀 Local Setup

```bash
git clone https://github.com/treccaniandrea6-prog/progettovuejs2-sunnee-bottle.git
cd progettovuejs2-sunnee-bottle
npm install
npm run dev


```
