const mix = require("laravel-mix");

//mix.setResourceRoot(process.env.MIX_ASSET_URL);
mix.config.fileLoaderDirs.fonts = "default/fonts";
mix.webpackConfig({
    output: {
        chunkFilename: "default/js/[name].js?id=[chunkhash]"
        // "/default/js/main.js": "/default/js/main.js"
    }
});
mix.sass("themes/default/assets/scss/argon.scss", "public/default/css").js(
    "themes/default/main.js",
    "public/default/js"
);
