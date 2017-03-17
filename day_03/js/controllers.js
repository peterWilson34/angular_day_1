angular.module('MyApp').controller('home',function(myData,$scope){
  console.log('home');
  myData.getAllProducts().then(function(res){
    console.log(res);
    $scope.products=res;
  },function(err){
    console.log(err);
  })
  $scope.mydata = new Date();
  $scope.x=5;
  $scope.$watch('x',function(newVal,oldVal){
    console.log('newVal',newVal);
    console.log('oldVal',oldVal);
  })
})
