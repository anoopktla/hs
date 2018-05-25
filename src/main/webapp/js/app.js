var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'index.html',
    controller  : 'HomeController'
  })

  .when('/list', {
    templateUrl : 'list',
    controller  : 'EmployeeController'
  })

  .when('/viewEmployeeDetails', {
    templateUrl : 'viewEmployeeDetails',
    controller  : 'EmployeeController'
  })
  .when('/new', {
      templateUrl : 'new',
      controller  : 'EmployeeController'
    })

  .otherwise({redirectTo: '/'});
});
app.service('EmployeeCRUDService', [ '$http', function($http) {

    this.getEmployee = function getEmployee(employeeId) {
        return $http({
            method : 'GET',
            url : 'employees/' + employeeId
        });
    }
    this.addEmployee = function addEmployee(employee) {

        return $http({
            method : 'POST',
            url : 'employees',
            data : {
            name :employee.name,
            employeeId :employee.employeeId,
            address: employee.address,
            employmentDetails: employee.employmentDetails,
            personalDetails : employee.personalDetails
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
    this.getAllDesignations = function getAllDesignations() {
            return $http({
                method : 'GET',
                url : 'designations'
            });
        }
        this.getAllSalutations = function getAllSalutations() {
                    return $http({
                        method : 'GET',
                        url : 'salutations'
                    });
                }
         this.getAllStates = function getAllStates() {
                            return $http({
                                method : 'GET',
                                url : 'states'
                            });
                        }
                         this.getAllCountries = function getAllStates() {
                                                    return $http({
                                                        method : 'GET',
                                                        url : 'countries'
                                                    });
                                                }
} ]);
app.controller('HomeController', ['$scope','EmployeeCRUDService',
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
              EmployeeCRUDService.addEmployee($scope.employee)
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
       $scope.getAllStaticValues = function () {
                EmployeeCRUDService.getAllDesignations()
                  .then(function success(response) {
                      $scope.designations = response.data;
                      $scope.message='';
                      $scope.errorMessage = '';
                  },
                  function error (response) {
                      $scope.message='';
                      $scope.errorMessage = 'Error getting designations!';
                  });
                  EmployeeCRUDService.getAllSalutations()
                                    .then(function success(response) {
                                        $scope.salutations = response.data;
                                        $scope.message='';
                                        $scope.errorMessage = '';
                                    },
                                    function error (response) {
                                        $scope.message='';
                                        $scope.errorMessage = 'Error getting salutations!';
                                    });
                 EmployeeCRUDService.getAllStates()
                                                     .then(function success(response) {
                                                         $scope.states = response.data;
                                                         $scope.message='';
                                                         $scope.errorMessage = '';
                                                     },
                                                     function error (response) {
                                                         $scope.message='';
                                                         $scope.errorMessage = 'Error getting states!';
                                                     });
                EmployeeCRUDService.getAllCountries()
                                                                     .then(function success(response) {
                                                                         $scope.countries = response.data;
                                                                         $scope.message='';
                                                                         $scope.errorMessage = '';
                                                                     },
                                                                     function error (response) {
                                                                         $scope.message='';
                                                                         $scope.errorMessage = 'Error getting states!';
                                                                     });
            };



}]);
app.controller('EmployeeController', ['$scope','EmployeeCRUDService',
 function ($scope,EmployeeCRUDService) {
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

 }


]);

