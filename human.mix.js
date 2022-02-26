const mix = require("laravel-mix");

//mix.setResourceRoot(process.env.MIX_ASSET_URL);
mix.config.fileLoaderDirs.fonts = "human/fonts";
mix.webpackConfig({
    output: {
        chunkFilename: "human/js/[name].js?id=[chunkhash]"
        // "/human/js/main.js": "/human/js/main.js"
    }
});
mix.sass("themes/human/assets/scss/argon.scss", "public/human/css").js(
    "themes/human/main.js",
    "public/human/js"
);
