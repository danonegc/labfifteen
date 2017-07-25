
  var app= angular.module('Lab15');

  app.controller('resultCtrl', function($scope, theWords){

    $scope.theWords = theWords.gotMadWords();

  });
