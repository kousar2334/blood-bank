const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.setPublicPath("public/human").setResourceRoot("/human");

mix.js("resources/js/templateOne/main.js", "public/human/js").sass(
    "resources/js/templateOne/assets/scss/argon.scss",
    "public/human/css"
);

// mix.webpackConfig({
//     output: {
//         chunkFilename: "js/template/templateOne/[name].js?id=[chunkhash]",
//         publicPath: "/public/js/template/templateOne"
//     }
// });
// mix.js("resources/js/default/main.js", "public/js/template/default");
// mix.js("resources/js/templateOne/main.js", "public/js/template/templateOne");

// mix.js(source + '/resources/assets/js/dashboard.js', dist + '/js').vue({ version: 2 });

// mix.sass(source + '/resources/assets/sass/dashboard.scss', dist + '/css')

//     .copyDirectory(dist + '/js', source + '/public/js')
//     .copyDirectory(dist + '/css', source + '/public/css');
