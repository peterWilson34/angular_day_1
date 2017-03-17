angular.module('MyApp').factory('myData',function($http,$q){
  return{
    getAllProducts:function(){
      var def= $q.defer();
      $http({
        url:'http://test.w34.co/json/',
        method:'GET'
      }).then(function(res){
        console.log(res);
        def.resolve(res.data)
      },function(err){
        def.reject(err)
      })
      return def.promise;
    }
  }
})
