angular.module('MyApp').factory("myData",function($http,$q){
  return{
    getData:function (){
      var defer = $q.defer();
      $http({
        url:'http://test.w34.co/json/',
        method:'GET'
      }).then(function(res){
        defer.resolve(res.data) // resolve data
        console.log('res',res);
      },function(err){
        defer.reject(err) // reject request
        console.log("error",err);
      })
      return defer.promise;
    },
    setData:function(data){
      console.log(data);
    }
  }
});
