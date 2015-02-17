// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic', 'ngCordova']);

myApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider

  .state('home', {
    abstract: true,
    url: "/home",
    templateUrl: "app/home/home.html"
  })

  .state('home.loading', {
    url: "/loading",
    views: {
      "tab-loading": {
        templateUrl: "app/home/loading.html"
      }
    }
  })

  .state('home.data', {
    url: "/data",
    views: {
      "tab-data": {
        templateUrl: "app/home/data.html"
      }
    }
  })

  .state('home.err', {
    url: "/err",
    views: {
      "tab-err": {
        templateUrl: "app/home/error.html"
      }
    }
  })

  .state('home.display', {
    url: "/display",
    views: {
      "tab-display": {
        templateUrl: "app/home/display.html"
      }
    }
  });

  $urlRouterProvider.otherwise('/home/loading');
});
