'use strict';
define([
    'angular',
    'angularRoute',
    'cleave'
], function (angular) {
    angular.module('myApp.view1', ['ngRoute', 'cleave.js'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view1', {
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl'
            });
        }])
        .controller('View1Ctrl', ['$scope', function ($scope) {
            $scope.onCreditCardValueChange = function (formattedValue) {
                $scope.model.creditCardFormattedValue = formattedValue;
            };

            $scope.onCreditCardTypeChanged = function (type) {
                $scope.model.creditCardType = type;
            };

            $scope.model = {
                creditCardRawValue: '',
                creditCardFormattedValue: '',
                creditCardType: ''
            };

            $scope.options = {
                creditCard: {
                    creditCard: true,
                    onCreditCardTypeChanged: $scope.onCreditCardTypeChanged
                }
            };
        }]);
});

