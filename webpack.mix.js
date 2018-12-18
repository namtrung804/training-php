const mix = require('laravel-mix');

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
/*
* CSS/JS CMS Main
*/
mix.sass('public/cms/scss/cms-main.scss', 'public/build/cms/css/cms-main-custom.min.css')
mix.scripts([
    'public/cms/js/alert.js',
    'public/cms/js/datatable.js',
    'public/cms/js/cms-main.js',
    'public/cms/js/upload-file.js',
    'public/cms/js/form.js',
    'public/cms/js/form-with-multi-langs.js',
], 'public/build/cms/js/cms-main-custom.min.js')
/*
* CSS CMS Login page
*/
mix.styles([
    'public/cms/assets/css/icons/icomoon/styles.css',
    'public/cms/assets/css/bootstrap.css',
    'public/cms/assets/css/core.css',
    'public/cms/assets/css/components.css',
    'public/cms/assets/css/colors.css',
    'public/cms/assets/css/extras/animate.min.css'
], 'public/build/cms/css/cms-login.min.css')
/*
* JS CMS Login page
*/
mix.scripts([
    'public/cms/assets/js/plugins/loaders/pace.min.js',
    'public/cms/assets/js/core/libraries/jquery.min.js',
    'public/cms/assets/js/core/libraries/bootstrap.min.js',
    'public/cms/assets/js/plugins/loaders/blockui.min.js',
    'public/cms/assets/js/plugins/forms/validation/validate.min.js',
    'public/cms/assets/js/plugins/forms/styling/uniform.min.js',
    'public/cms/assets/js/plugins/ui/nicescroll.min.js',
    'public/cms/assets/js/plugins/ui/drilldown.js',
    'public/cms/assets/js/core/app.js',
    'public/cms/assets/js/pages/login_validation.js'
], 'public/build/cms/js/cms-login.min.js')
/*
* Images
*/
mix.copyDirectory('public/cms/assets/images', 'public/build/cms/images')
/*
* Fonts
*/
mix.copyDirectory([
    'public/bower_components/flexslider/fonts',
    'public/cms/assets/css/icons/icomoon/fonts'
], 'public/build/cms/css/fonts')

mix.copyDirectory([
    'public/bower_components/font-awesome/fonts'
], 'public/build/cms/fonts')

/*
* JS CMS Main
*/
mix.scripts([
    <!-- Core JS files -->
    'public/cms/assets/js/plugins/loaders/pace.min.js',
    'public/cms/assets/js/core/libraries/jquery.min.js',
    'public/cms/assets/js/core/libraries/bootstrap.min.js',
    'public/cms/assets/js/plugins/loaders/blockui.min.js',
    'public/cms/assets/js/plugins/ui/nicescroll.min.js',
    'public/cms/assets/js/plugins/ui/drilldown.js',
    <!-- Core JS files -->
    <!-- Theme JS files -->
    'public/cms/assets/js/plugins/visualization/d3/d3.min.js',
    'public/cms/assets/js/plugins/visualization/d3/d3_tooltip.js',
    'public/cms/assets/js/plugins/forms/styling/switchery.min.js',
    'public/cms/assets/js/plugins/forms/styling/uniform.min.js',
    'public/cms/assets/js/plugins/forms/selects/bootstrap_multiselect.js',
    'public/cms/assets/js/plugins/notifications/pnotify.min.js',
    'public/cms/assets/js/plugins/forms/validation/validate.min.js',
    'public/cms/assets/js/plugins/forms/inputs/touchspin.min.js',
    'public/cms/assets/js/plugins/forms/styling/switch.min.js',
    'public/cms/assets/js/core/libraries/jquery_ui/interactions.min.js',
    'public/cms/assets/js/plugins/forms/selects/select2.min.js',
    'public/cms/assets/js/plugins/loaders/progressbar.min.js',
    'public/cms/assets/js/plugins/notifications/jgrowl.min.js',
    'public/cms/assets/js/plugins/ui/moment/moment.min.js',
    'public/cms/assets/js/plugins/pickers/daterangepicker.js',
    'public/cms/assets/js/plugins/pickers/anytime.min.js',
    'public/cms/assets/js/plugins/pickers/pickadate/picker.js',
    'public/cms/assets/js/plugins/pickers/pickadate/picker.date.js',
    'public/cms/assets/js/plugins/pickers/pickadate/picker.time.js',
    'public/cms/assets/js/plugins/pickers/pickadate/legacy.js',
    'public/cms/assets/js/plugins/velocity/velocity.min.js',
    'public/cms/assets/js/plugins/velocity/velocity.ui.min.js',
    'public/cms/assets/js/plugins/buttons/spin.min.js',
    'public/cms/assets/js/plugins/buttons/ladda.min.js',
    'public/cms/assets/js/plugins/ui/prism.min.js',
    'public/cms/assets/js/plugins/editors/ace/ace.js',
    'public/cms/assets/js/plugins/pickers/datepicker.js',
    'public/cms/assets/js/plugins/pagination/bootpag.min.js',
    'public/cms/assets/js/plugins/pagination/bs_pagination.min.js',
    'public/cms/assets/js/plugins/pagination/datepaginator.min.js',
    'public/cms/assets/js/plugins/tables/datatables/datatables.min.js',
    'public/cms/assets/js/plugins/tables/datatables/extensions/responsive.min.js',
    'public/cms/assets/js/plugins/tables/datatables/extensions/buttons.min.js',
    'public/cms/assets/js/plugins/tables/datatables/extensions/jszip/jszip.min.js',
    'public/cms/assets/js/plugins/tables/datatables/extensions/pdfmake/pdfmake.min.js',
    'public/cms/assets/js/plugins/tables/datatables/extensions/pdfmake/vfs_fonts.min.js',
    'public/cms/assets/js/plugins/forms/wizards/steps.min.js',
    'public/cms/assets/js/core/libraries/jasny_bootstrap.min.js',
    'public/cms/assets/js/plugins/extensions/cookie.js',

    'public/cms/assets/js/core/app.js',
    'public/cms/assets/js/pages/wizard_steps.js',
    'public/cms/assets/js/pages/form_validation.js',
    'public/cms/assets/js/pages/picker_date.js',
], 'public/build/cms/js/cms-main.min.js')

mix.webpackConfig({
    watchOptions: {
        ignored: /node_modules/
    }
});
if (mix.inProduction()) {
    mix.version();
}
