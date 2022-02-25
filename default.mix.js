const mix = require("laravel-mix");
require("laravel-mix-merge-manifest");
mix.setPublicPath("public/default").setResourceRoot("/default");

mix.js("resources/js/default/main.js", "public/default/js")
    .sass("resources/js/default/assets/sass/app.scss", "public/default/css")
    .mergeManifest();
