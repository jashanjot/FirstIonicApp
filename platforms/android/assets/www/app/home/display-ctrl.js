(function() {
  'use strict';

  angular.module('starter').controller('displayCtrl', ['paramService', '$http', '$cordovaDevice', '$scope', '$stateParams', displayCtrl]);

  function displayCtrl (paramService, $http, $cordovaDevice, $scope, $stateParams){
    ionic.Platform.ready(function (){
        var uuid = "";
        try
        {
          if(ionic.Platform.isAndroid() || ionic.Platform.isIOS()){
              uuid = $cordovaDevice.getUUID();
          }
        } catch(err){
          uuid = "";
        }

        $http.get('http://ez-dial.com/uuid/api/values/getclientbyuuid?id=' + uuid).then(function (response){
          var data = response.data;

        // $scope.username = data.UserName;
        // $scope.email = data.Email;

        $scope.username = paramService.getUsername();
        $scope.email = paramService.getEmail();
      })
    });
  };
})();
