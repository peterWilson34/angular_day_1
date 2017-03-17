angular.module('MyApp',["ngRoute","ngMap"])
.config(function($locationProvider){
  $locationProvider.html5Mode(true);
})
