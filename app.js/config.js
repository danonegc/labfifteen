
  var app = angular.module('Lab15', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider.when('/input',{
      controller: 'inputCtrl',
      templateUrl: 'views/input.html'
    });
    $routeProvider.when('/result',{
      controller: 'resultCtrl',
      templateUrl: 'views/result.html'

  });

});
