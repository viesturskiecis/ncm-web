/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/',
            "ng2-bootstrap/ng2-bootstrap":   "node_modules/ng2-bootstrap/ng2-bootstrap",
            "ng2-charts/ng2-charts":   "node_modules/ng2-charts/ng2-charts"

        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'moment': 'npm:moment/moment.js',
            'angular2-highcharts': 'npm:angular2-highcharts',

            // This mapping is for loading Highcharts static API and Highcharts modules
            'highcharts': 'npm:highcharts'

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            "node_modules/ng2-bootstrap": {
                defaultExtension: 'js'
            },
            'angular2-highcharts': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'highcharts': {
                // NOTE: You should set './highcharts.src.js' here
                // if you are not going to use <chart type="StockChart"
                main: './highstock.src.js',

                defaultExtension: 'js'
            }
        }
    });
})(this);