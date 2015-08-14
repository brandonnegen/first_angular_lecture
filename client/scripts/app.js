var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){
    $scope.note = {};
    $scope.notes = [];
    $scope.dataCount;
    $scope.personOne;
    $scope.personTwo;
    $scope.selected = 0;

    $scope.select = function(index){
      $scope.selected = index;
        console.log($scope.selected);
    };

    $scope.heading = "Check Out This Cool Stuff!!! ";

    $scope.getData = function(){
        //GET
        $http.get('/data').then(function(response){
           console.log(response);
            $scope.note = {};
            $scope.notes = response.data;
            $scope.dataCount = $scope.notes.length;
            //$scope.select = function(response) {
            //    for (var i = 0; i < response.data.length; i++) {
            //        console.log(response.data[i]._id);
            //        console.log(response.data[i].message);
            //        $scope.selected = response.data[i].message;
            //        console.log($scope.selected);
            //    }
            //};
            for(var i = 0; i < response.data.length; i++){
                console.log(response.data[i]._id);
                console.log(response.data[i].message);
            }
        });
    };

    $scope.updateMessage = function(note){
        //POST
        $http.post('/data', note).then($scope.getData());
    };
}]);