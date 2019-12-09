let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/')
    .sass('src/sass/app.sass', 'dist/')
    .options({
        processCssUrls: false
    })
    .setPublicPath('dist');

mix.browserSync({
    proxy: 'book.loc',
    files: ['*.html', 'dist/app.css', 'dist/app.js']
});