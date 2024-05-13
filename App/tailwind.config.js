/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bermuda: " #feff32",
      },
      fontFamily: {
        integral: ["integral"],
        dm: ["dm"],
        dmbold: ["dm-bold"],
        Mon: ["Mon"],
        Vict: ["Vict"],
      },
      backgroundImage: (theme) => ({
        "hero-pattern":
          "url('https://static.vecteezy.com/system/resources/thumbnails/001/794/878/original/template-of-black-ink-expanding-from-the-right-on-white-background-in-4k-free-video.jpg')",
        "footer-textue":
          "url('https://img.freepik.com/free-photo/black-white-background_23-2150530990.jpg')",
        Ban: "url('https://png.pngtree.com/thumb_back/fw800/background/20231227/pngtree-textured-black-cubes-abstract-background-with-a-3d-twist-image_13890067.png')",
        Card: "url('https://i.pinimg.com/474x/51/c5/bd/51c5bde82d00803005a54a75d677d401.jpg')",
        Card1:
          "url('https://img.freepik.com/free-vector/abstract-black-splat-grunge-background_1035-19430.jpg')",
        BG: "url('https://img.freepik.com/free-vector/gradient-hexagonal-background_23-2148952241.jpg')",
      }),
    },
    plugins: [],
  },
};
