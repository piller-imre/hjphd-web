'use strict';

var hjphd = angular.module('hjphd', [
    'ui.router'
]);

hjphd.config(
    ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.
            state('hirek', {
                url: '/hirek',
                templateUrl: '/partials/hirek.html'
            }).
            state('iskola', {
                url: '/iskola',
                templateUrl: '/partials/iskola.html'
            }).
            state('doktoranduszok', {
                url: '/doktoranduszok',
                templateUrl: '/partials/doktoranduszok.html'
            }).
            state('oktatas', {
                url: '/oktatas',
                templateUrl: '/partials/oktatas.html'
            }).
            state('szabalyzatok', {
                url: '/szabalyzatok',
                templateUrl: '/partials/szabalyzatok.html'
            }).
            state('ertekezesek', {
                url: '/ertekezesek',
                templateUrl: '/partials/ertekezesek.html'
            }).
            state('linkek', {
                url: '/linkek',
                templateUrl: '/partials/linkek.html'
            }).
            state('alumni', {
                url: '/alumni',
                templateUrl: '/partials/alumni.html'
            });
    }]
);

