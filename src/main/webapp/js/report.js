var app = angular.module('report',[]);
app.service('EmployeeCRUDService', [ '$http', function($http) {

 this.getEmployee = function getEmployee(employeeId) {
        return $http({
            method : 'GET',
            url : '../employees/' + employeeId
        });
    }

   }]);

    app.controller('CRUDCtrl', ['$scope','EmployeeCRUDService',
    function ($scope,EmployeeCRUDService) {
          $scope.getEmployee = function () {

          var url_string = window.location.href;
          var url = new URL(url_string);
          var id = url.searchParams.get("id");
          EmployeeCRUDService.getEmployee(id)
                .then(function success(response) {
                    $scope.employee = response.data;
                    $scope.employee.id = id;
                    $scope.message='';
                    $scope.errorMessage = '';
                },
                function error (response) {
                    $scope.message = '';
                    if (response.status === 404){
                        $scope.errorMessage = 'Employee not found!';
                    }
                    else {
                        $scope.errorMessage = "Error getting employee!";
                    }
                });
          };
           $scope.init = function () {
                      var url_string = window.location.href
                      var url = new URL(url_string);
                      var id = url.searchParams.get("id");
                      alert( id );
                    };



         }]);