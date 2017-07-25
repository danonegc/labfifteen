
var app = angular.module('Lab15');
app.controller("inputCtrl", function($scope, theWords, $location){

  $scope.madWords = function(words){
    console.log(words);
    theWords.keepMadWords(words);
    $location.path('views/result');
  };
});
