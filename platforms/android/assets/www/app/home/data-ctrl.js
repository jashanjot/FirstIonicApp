(function() {
  'use strict';

  angular.module('starter').controller('dataCtrl', ['$cordovaDevice', '$state', '$http', '$scope', dataCtrl]);

  function dataCtrl ($cordovaDevice, $state, $http, $scope){
      $scope.toShow = true;
      $scope.toShowButton = true;
      $scope.toShowWheel = false;

      ionic.Platform.ready(function (){
          $scope.submit = function (){
            //TODO: VALIDATION FUNCTION
            $scope.toShowWheel = true;
            $scope.toShowButton = false;
            var uuid = "";
            try
            {
                  try
                  {
                      if(ionic.Platform.isAndroid() || ionic.Platform.isIOS()){
                          uuid = $cordovaDevice.getUUID();
                      }
                      
                      $http.post('http://ez-dial.com/uuid/api/values/SaveClient', {'UUID': uuid,
                                                                                   'UserName': this.username,
                                                                                   'Email': this.email})
                      .success(function(data){
                        $scope.toShow = false;
                        $scope.toShowWheel = false;
                        $scope.saved = "Success!";
                      })
                      .error(function(error){
                        $scope.toShowButton = true;
                        $scope.toShowWheel = false;
                        $scope.saved = "Error with Connection or Input: Please Try Again!";
                      });
                  } catch(err){
                      $state.go("home.err");
                  }
            } catch(err){
              $state.go("home.err");
            }
          };
    });
  };
})();
