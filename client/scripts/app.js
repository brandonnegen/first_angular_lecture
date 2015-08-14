var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){
    $scope.note = {};
    $scope.notes = [];

    $scope.heading = "Check Out This Cool Stuff!!! ";

    $scope.getData = function(){
        //GET
        $http.get('/data').then(function(response){
           console.log(response);
            $scope.note = {};
            $scope.notes = response.data;
            console.log("Notes", $scope.notes);
        });
    };

    $scope.updateMessage = function(note){
        //POST
        $http.post('/data', note).then($scope.getData());
    };
    console.log("outside loop", $scope.notes);
}]);