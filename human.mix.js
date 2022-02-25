const mix = require("laravel-mix");

mix.setPublicPath("public/human").setResourceRoot("/human");

mix.js("themes/human/main.js", "public/human/js").sass(
    "themes/human/assets/scss/argon.scss",
    "public/human/css"
);
