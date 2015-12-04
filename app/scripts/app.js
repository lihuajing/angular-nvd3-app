'use strict';

/**
 * @ngdoc overview
 * @name sampleAppApp
 * @description
 * # sampleAppApp
 *
 * Main module of the application.
 */
angular
    .module('DrChartApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'ui.sortable',
        'ui.slider',
        'ngTable',
        'ngFileUpload'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/template/common/page.html',
                headerUrl: 'views/template/common/header.html',
                mainUrl: 'views/homePage/page/main.html',
                footerUrl: 'views/template/common/footer.html',
                controller: 'HomePageCtrl',
                controllerAs: 'HomePage'
            })
            .when('/:chartName', {
                templateUrl: 'views/template/common/page.html',
                headerUrl: 'views/template/common/header.html',
                sidebarUrl: 'views/templte/common/sidebar.html',
                mainUrl: 'views/chartPage/page/main.html',
                footerUrl: 'views/template/common/footer.html',
                controller: 'ChartPageCtrl',
                controllerAs: 'ChartPage'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
