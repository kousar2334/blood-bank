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
// if (["deafult", "human"].includes(process.env.npm_config_section)) {
//     require(`${__dirname}/webpack.${process.env.npm_config_section}.mix.js`);
// } else {
//     console.log(
//         "\x1b[41m%s\x1b[0m",
//         "Provide correct --section argument to build command: customers, backoffice"
//     );
//     throw new Error("Provide correct --section argument to build command!");
// }

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
