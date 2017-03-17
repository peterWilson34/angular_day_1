//routing
angular.module("myApp").config(function($routeProvider){
  $routeProvider.when("/",{
    templateUrl:"templates/home.html",
    controller:"myCtrl"
  })
  .when("/signup",{
    templateUrl:"templates/signup.html",
    controller:"secondCtrl"
  })
  .when("/profile",{
    templateUrl:"templates/profile.html"
    
  })
})
