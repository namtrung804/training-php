/*
 * gọi các plugin cần thiết
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-image'),
    minify = require('gulp-minify'),
    rev = require('gulp-rev'),
    del = require('del');

/*
 * khai báo các đường dẫn và file sẽ dùng
 */
var paths = {
    cmsLoginCSS: [
        'public/cms/assets/css/icons/icomoon/styles.css',
        'public/cms/assets/css/bootstrap.css',
        'public/cms/assets/css/core.css',
        'public/cms/assets/css/components.css',
        'public/cms/assets/css/colors.css',
    ],
    // backendCss: [
    //     'public/cms/assets/css/icons/icomoon/styles.css',
    //     'public/cms/assets/css/bootstrap.css',
    //     'vendor/enyo/dropzone/dist/min/dropzone.min.css',
    //     'public/cms/assets/css/core.css',
    //     'public/cms/assets/css/components.css',
    //     'public/cms/assets/css/colors.css',
    //     'public/cms/css/backend.css',
    // ],
    cmsLoginJS: [
        'public/cms/assets/js/plugins/loaders/pace.min.js',
        'public/bower_components/jquery/dist/jquery.min.js',
        'public/cms/assets/js/core/libraries/bootstrap.min.js',
        'public/cms/assets/js/plugins/loaders/blockui.min.js',
        'public/cms/assets/js/plugins/forms/styling/validate.min.js',
        'public/cms/assets/js/plugins/forms/styling/uniform.min.js',
        'public/cms/assets/js/plugins/ui/nicescroll.min.js',
        'public/cms/assets/js/plugins/ui/drilldown.js',
        'public/cms/assets/js/core/app.js',
        'public/cms/assets/js/pages/login_validation.js',
    ],
    // backendJs: [
    //     'public/bower_components/jquery/dist/jquery.min.js',
    //     'public/cms/assets/js/plugins/loaders/pace.min.js',
    //     'public/cms/assets/js/core/libraries/bootstrap.min.js',
    //     'public/cms/assets/js/plugins/loaders/blockui.min.js',
    //     'public/cms/assets/js/plugins/tables/datatables/datatables.min.js',
    //     'public/cms/assets/js/plugins/notifications/sweet_alert.min.js',
    //     'public/cms/assets/js/plugins/forms/styling/uniform.min.js',
    //     'public/cms/assets/js/plugins/forms/styling/switch.min.js',
    //     'public/cms/assets/js/plugins/forms/selects/bootstrap_multiselect.js',
    //     'public/cms/assets/js/plugins/forms/styling/switchery.min.js',
    //     'public/cms/assets/js/plugins/forms/inputs/touchspin.min.js',
    //     'public/cms/assets/js/plugins/notifications/bootbox.min.js',
    //     'public/cms/assets/js/plugins/forms/validation/validate.min.js',
    //     'public/cms/assets/js/plugins/notifications/pnotify.min.js',
    //     'public/cms/assets/js/plugins/forms/selects/bootstrap_select.min.js',
    //     'public/cms/assets/js/plugins/forms/tags/tagsinput.min.js',
    //     'public/cms/assets/js/plugins/forms/tags/tokenfield.min.js',
    //     'public/cms/assets/js/plugins/ui/prism.min.js',
    //     'public/cms/assets/js/plugins/forms/inputs/typeahead/typeahead.bundle.min.js',
    //     'public/cms/assets/js/plugins/forms/selects/select2.min.js',
    //     'public/cms/assets/js/plugins/pickers/color/spectrum.js',
    //     'public/cms/assets/js/core/libraries/jquery_ui/interactions.min.js',
    //     'public/cms/assets/js/core/libraries/jquery_ui/widgets.min.js',
    //     'public/cms/assets/js/core/libraries/jquery_ui/effects.min.js',
    //     'public/cms/assets/js/plugins/media/fancybox.min.js',
    //     'public/cms/assets/js/plugins/notifications/jgrowl.min.js',
    //     'public/cms/assets/js/plugins/ui/moment/moment.min.js',
    //     'public/cms/assets/js/plugins/pickers/daterangepicker.js',
    //     'public/cms/assets/js/plugins/pickers/anytime.min.js',
    //     'public/cms/assets/js/plugins/pickers/pickadate/picker.js',
    //     'public/cms/assets/js/plugins/pickers/pickadate/picker.date.js',
    //     'public/cms/assets/js/plugins/pickers/pickadate/picker.time.js',
    //     'public/cms/assets/js/plugins/loaders/progressbar.min.js',
    //     'public/cms/js/plugin/jspdf.js',
    //     'public/cms/assets/js/plugins/loaders/blockui.min.js',
    //     'public/cms/js/plugin/masonry.pkgd.min.js',
    //     'public/bower_components/imagesloaded/imagesloaded.pkgd.js',
    //     'public/cms/assets/js/core/app.js',
    //     'public/cms/assets/js/pages/form_input_groups.js',
    //     'public/cms/assets/js/pages/datatables_extension_buttons_init.js',
    //     'public/cms/assets/js/pages/components_modals.js',
    //     'public/cms/assets/js/pages/form_validation.js',
    //     'public/cms/assets/js/pages/components_notifications_pnotify.js',
    //     'public/cms/assets/js/pages/form_bootstrap_select.js',
    //     'public/cms/assets/js/pages/login.js',
    //     'public/bower_components/datatables.net-buttons/js/dataTables.buttons.js',
    //     'public/bower_components/datatables.net-buttons/js/buttons.flash.js',
    //     'public/bower_components/jszip/dist/jszip.min.js',
    //     'public/bower_components/pdfmake/build/pdfmake.min.js',
    //     'public/bower_components/pdfmake/build/vfs_fonts.js',
    //     'public/bower_components/datatables.net-buttons/js/buttons.html5.js',
    //     'public/bower_components/datatables.net-buttons/js/buttons.print.js'
    // ],
    fontsIcomoon: [
        'public/bower_components/flexslider/fonts/flexslider-icon.*',
        'public/cms/assets/css/icons/icomoon/fonts/icomoon.*'
    ],
    fontsAwesome: [
        'public/bower_components/font-awesome/fonts/FontAwesome.*',
        'public/bower_components/font-awesome/fonts/fontawesome-webfont.*'
    ],
    // sass: ['public/frontend/scss/*.scss'],
    // frontendCss: [
    //     'public/bower_components/font-awesome/css/font-awesome.min.css',
    //     'public/bower_components/flexslider/flexslider.css',
    //     'public/frontend/css/*.css',
    // ],
    // frontendJs: [
    //     'public/bower_components/jquery/dist/jquery.min.js',
    //     'public/bower_components/jquery-ui/jquery-ui.min.js',
    //     'public/cms/assets/js/plugins/forms/validation/validate.min.js',
    //     'public/bower_components/flexslider/jquery.flexslider-min.js',
    //     'public/bower_components/owl.carousel/src/js/owl.carousel.js',
    //     'public/bower_components/masonry/dist/masonry.pkgd.min.js',
    //     'public/bower_components/imagesloaded/imagesloaded.pkgd.min.js',
    //     'public/frontend/js/core/*.js',
    //     'public/frontend/js/theme/*.js', // gulp for theme
    //     'public/frontend/js/main.js',
    // ],
    // frontendImages: ['public/frontend/images/*'],
};

/*
 * Task Dashboard Backend
 */

//js
gulp.task('clean-js', function () {
    return del([
        'public/build/js/*.js'
    ]);
});
gulp.task('clean-css', function () {
    return del([
        'public/build/css/*.css'
    ]);
});
gulp.task('cmsLoginJS', ['clean-js'], function () {
    gulp.src(paths.cmsLoginJS)
        .pipe(uglify())
        .pipe(concat('cmsLoginJS.min.js'))
        .pipe(minify({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
        .pipe(rev())
        .pipe(gulp.dest('public/build/js'))
        .pipe(rev.manifest('public/build/rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest(''));
});

//css
gulp.task('cmsLoginCSS', ['clean-css'], function () {
    gulp.src(paths.cmsLoginCSS)
        .pipe(concat('cmsLoginCSS.min.css'))
        .pipe(minifyCSS())
        .pipe(rev())
        .pipe(gulp.dest('public/build/css'))
        .pipe(rev.manifest('public/build/rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest(''));
});


/*
 * Task Backend
 */

//js
// gulp.task('backendJs', function () {
//     gulp.src(paths.backendJs)
//         .pipe(uglify())
//         .pipe(concat('backendJs.min.js'))
//         .pipe(gulp.dest('public/build/js'));
// });
//
// //css
// gulp.task('backendCss', function () {
//     gulp.src(paths.backendCss)
//         .pipe(concat('backendCss.min.css'))
//         .pipe(minifyCSS())
//         .pipe(gulp.dest('public/build/css'));
// });

/*
 * Fonts
 */
gulp.task('fontsIcomoon', function () {
    return gulp.src(paths.fontsIcomoon)
        .pipe(gulp.dest('public/build/css/fonts/'));
});

gulp.task('fontsAwesome', function () {
    return gulp.src(paths.fontsAwesome)
        .pipe(gulp.dest('public/build/fonts/'));
});

/*
 * Task Frontend
 */
//js
// gulp.task('frontendJs', function () {
//     gulp.src(paths.frontendJs)
//         .pipe(uglify())
//         .pipe(concat('frontendJs.min.js'))
//         .pipe(gulp.dest('public/build/js'));
// });
//
// //css
// gulp.task('frontendCss', function () {
//     gulp.src(paths.frontendCss)
//         .pipe(concat('frontendCss.min.css'))
//         .pipe(minifyCSS())
//         .pipe(gulp.dest('public/build/css'));
// });
// //images
// gulp.task('frontendImages', function () {
//     gulp.src(paths.frontendImages)
//         .pipe(imagemin())
//         .pipe(gulp.dest('public/frontend/images'));
// });
// //compass sass
//
//
// gulp.task('compass', function () {
//     gulp.src(paths.sass)
//         .pipe(sass())
//         .pipe(minifyCSS())
//         .pipe(rename('compasscss.min.css'))
//         .pipe(gulp.dest('public/build/css'));
// });

/*
 * Gulp Watch
 */
gulp.task('watch', function () {
    gulp.watch(paths.cmsLoginJS, ['cmsLoginJS']);
    gulp.watch(paths.cmsLoginCSS, ['cmsLoginCSS']);
    // gulp.watch(paths.backendJs, ['backendJs']);
    // gulp.watch(paths.backendCss, ['backendCss']);
    gulp.watch(paths.fontsIcomoon, ['fontsIcomoon']);
    gulp.watch(paths.fontsAwesome, ['fontsAwesome']);
    // gulp.watch(paths.sass, ['compass']);
    // gulp.watch(paths.frontendJs, ['frontendJs']);
    // gulp.watch(paths.frontendCss, ['frontendCss']);
});

/*
 * Gulp Default
 */
gulp.task('default', [
    // 'compass',
    'cmsLoginJS',
    'cmsLoginCSS',
    // 'backendJs',
    // 'backendCss',
    'fontsAwesome',
    // 'frontendJs',
    // 'frontendCss',
    'fontsIcomoon',
    // 'frontendImages'
]);
