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
            }).
            state('news', {
                url: '/news',
                templateUrl: '/partials/news.html'
            }).
            state('school', {
                url: '/school',
                templateUrl: '/partials/school.html'
            }).
            state('students', {
                url: '/students',
                templateUrl: '/partials/students.html'
            }).
            state('education', {
                url: '/education',
                templateUrl: '/partials/education.html'
            }).
            state('rules', {
                url: '/rules',
                templateUrl: '/partials/rules.html'
            }).
            state('dissertations', {
                url: '/dissertations',
                templateUrl: '/partials/dissertations.html'
            }).
            state('links', {
                url: '/links',
                templateUrl: '/partials/links.html'
            });
    }]
);

hjphd.controller('HjphdController',
    ['$scope', '$state',
    function HjphdController($scope, $state)
    {
        /**
         * Detect the preferred language.
         *
         * @returns: "hu" or "en"
         */
        function detectLanguage()
        {
            var userLanguage = window.navigator.language || window.navigator.userLanguage;
            if (userLanguage == "hu-HU") {
                return "hu";
            }
            else {
                return "en";
            }
        }

        /**
         * Toggle the language from "hu" to "en" and back.
         */
        $scope.toggleLanguage = function()
        {
            if ($scope.language == "hu") {
                $scope.language = "en";
                $state.go("news");
            }
            else {
                $scope.language = "hu";
                $state.go("hirek");
            }
        }

        $scope.language = detectLanguage();
        $scope.hu = true;
    }
    ]
);

