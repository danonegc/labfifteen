var app = angular.module('Lab15');

app.factory('theWords', function(){



var theWords = {};

function keepMadWords(words){
  theWords = words;
}

function gotMadWords({
  return theWords;
}

return {
  gotMadWords:gotMadWords,
  keepMadWords:keepMadWords
}

});
