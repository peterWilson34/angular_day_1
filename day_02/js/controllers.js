angular.module('MyApp').controller("signup",function($scope,$location,$rootScope,myData){
  console.log('signup controller!');
  console.log(myData.getData);
  $scope.signup = function (isValid){
    console.log(isValid);
    if (isValid) {
      $rootScope.user=$scope.user;
      $location.url('/login')
    }
  }
})

angular.module('MyApp').controller("login",function($scope,$rootScope,$location,myData){
  console.log('login controller!');
  console.log('$rootScope.user',$rootScope.user);
  $scope.login = function (isValid){
    console.log(isValid);
    if (isValid) {
      console.log($scope.userLogin);
      if ($scope.userLogin.email == $rootScope.user.email &&
      $scope.userLogin.password == $rootScope.user.password) {

        $scope.loginError=false;
        $location.url('/profile')
      }else{
        $scope.loginError=true;
      }
    }
  }
})
angular.module('MyApp').controller("home",function($scope,myData){
  console.log("home controller!");
  myData.getData().then(function (data) { // use data
    console.log("result in controller",data);
    $scope.prodcuts=data;
  },function(err){ // handle reject
    console.log(err);
  })

});
