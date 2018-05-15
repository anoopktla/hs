var app = angular.module('app',[]);
app.service('EmployeeCRUDService', [ '$http', function($http) {

    this.getEmployee = function getEmployee(employeeId) {
        return $http({
            method : 'GET',
            url : 'employees/' + employeeId
        });
    }
    this.addEmployee = function addEmployee(name, email) {
        return $http({
            method : 'POST',
            url : 'employees',
            data : {
                name : name,
                email: email
            }
        });
    }
    this.updateEmployee = function updateEmployee(id, name, email) {
        return $http({
            method : 'PATCH',
            url : 'employees/' + id,
            data : {
                name : name,
                email: email
            }
        });
    }
    this.deleteEmployee = function deleteEmployee(id) {
        return $http({
            method : 'DELETE',
            url : 'employees/' + id
        })
    }
    this.getAllEmployees = function getAllEmployees() {
        return $http({
            method : 'GET',
            url : 'employees'
        });
    }
} ]);
app.controller('CRUDCtrl', ['$scope','EmployeeCRUDService',
  function ($scope,EmployeeCRUDService) {
      $scope.getEmployee = function () {
          var id = $scope.employee.id;
          EmployeeCRUDService.getEmployee($scope.employee.id)
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
      $scope.addEmployee = function () {
          if ($scope.employee != null && $scope.employee.name) {
              EmployeeCRUDService.addEmployee($scope.employee.name, $scope.employee.email)
                .then (function success(response){
                    $scope.message = 'employee added!';
                    $scope.errorMessage = '';
                },
                function error(response){
                    $scope.errorMessage = 'Error adding employee!';
                    $scope.message = '';
              });
          }
          else {
              $scope.errorMessage = 'Please enter a name!';
              $scope.message = '';
          }
      };
      $scope.updateEmployee = function () {
          EmployeeCRUDService.updateEmployee($scope.employee.id,
            $scope.Employee.firstName, $scope.employee.email)
            .then(function success(response) {
                $scope.message = 'Employee data updated!';
                $scope.errorMessage = '';
            },
            function error(response) {
                $scope.errorMessage = 'Error updating employee!';
                $scope.message = '';
            });
      };
      $scope.deleteEmployee = function () {
          EmployeeCRUDService.deleteEmployee($scope.employee.id)
            .then (function success(response) {
                $scope.message = 'Employee deleted!';
                $scope.Employee = null;
                $scope.errorMessage='';
            },
            function error(response) {
                $scope.errorMessage = 'Error deleting employee!';
                $scope.message='';
            });
      };
      $scope.getAllEmployees = function () {
          EmployeeCRUDService.getAllEmployees()
            .then(function success(response) {
                $scope.employees = response.data;
                $scope.message='';
                $scope.errorMessage = '';
            },
            function error (response) {
                $scope.message='';
                $scope.errorMessage = 'Error getting employees!';
            });
      };
}]);

