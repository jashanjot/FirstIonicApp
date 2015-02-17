(function() {
  'use strict';

  angular.module('starter').controller('loadingCtrl', ['paramService', '$cordovaDevice', '$http', '$state', loadingCtrl]);

  function loadingCtrl (paramService, $cordovaDevice, $http, $state){
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

          paramService.setUsername(data.UserName);
          paramService.setEmail(data.Email);

        if (data.RecordID == 0){
          $state.go('home.data');
        }else if (data.RecordID != undefined && data.RecordID != 0){
          $state.go('home.display');
        } else {
          $state.go('home.err');
        }
      },
      function(){
        $state.go('home.err');
      })
  });
  };
})();
