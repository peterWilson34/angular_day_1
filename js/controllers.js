angular.module("myApp").controller("myCtrl",function($scope){
  console.log("myCtrl");
  $scope.myName="Full Stack Track";
  $scope.items=[
    {name:"UI",intake:37},
    {name:"Mobile",intake:34},
    {name:"OS",intake:36},
    {name:"Full Stack",intake:37}
  ]
})
angular.module("myApp").controller("secondCtrl",function($scope,$location,$rootScope){
  console.log("secondCtrl!");
  // $scope.name="full stack"
  $scope.login=function () {
    console.log($scope.user);
    $rootScope.user=$scope.user
    $location.url('/profile');
  }
})
angular.module("myApp").controller("profile",function($scope){
  console.log("profile!");


})
