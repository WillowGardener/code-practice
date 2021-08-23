let mix = require('laravel-mix');
mix.setPublicPath('.');

mix
    .js('assets/js/app.js', 'main.js')
    .sass('assets/scss/app.scss', 'styles.css');