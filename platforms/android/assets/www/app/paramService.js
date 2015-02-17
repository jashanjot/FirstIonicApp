(function() {
  'use strict';

angular.module('starter').factory('paramService', [paramService]);

    function paramService (){

        var username;
        var email;

        return {
            getUsername: function (){
            return username;
            },
            setUsername: function (user){
              username = user;
            },
            getEmail: function (){
              return email;
            },
            setEmail: function (user){
              email = user;
            }
          }
        };
})();
