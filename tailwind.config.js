/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite//dist/flowbite.js"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-pic-1' : "url(https://pepid-clone-amt.netlify.app/static/media/homepage-image-scaled.c4a78f34d4149671f330.jpg)"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

