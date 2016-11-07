'use strict';

/**
 * @ngdoc overview
 * @name testSohoApp
 * @description
 * # testSohoApp
 *
 * Main module of the application.
 */
angular
  .module('testSohoApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function($routeProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        templateUrl: 'views/app.html'
      })
      .state('page404', {
        url: '/404',
        templateUrl: 'views/page-404.html',
        controller: 'Page404Ctrl',
        controllerAs: 'page404'
      })
      .state('app.home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('app.cards', {
        url: '/cards',
        templateUrl: 'views/cards.html',
        controller: 'CardsCtrl',
        controllerAs: 'cards'
      });
  });