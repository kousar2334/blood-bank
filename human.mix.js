const mix = require("laravel-mix");
require("laravel-mix-merge-manifest");
mix.setPublicPath("public/human").setResourceRoot("/human");

mix.js("themes/human/main.js", "public/human/js")
    .sass("themes/human/assets/scss/argon.scss", "public/human/css")
    .mergeManifest();
