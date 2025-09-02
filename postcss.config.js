// postcss.config.js
export default {
  plugins: {
    "tailwindcss/nesting": {}, // ✅ enable nesting first
    tailwindcss: {},
    autoprefixer: {},
  },
};
