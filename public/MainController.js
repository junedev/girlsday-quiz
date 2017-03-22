angular.module("girlsday")
    .controller("MainController", MainController);

MainController.$inject = ["$scope", "$routeParams", "$window", "$firebaseObject"];

function MainController($scope, $routeParams, $window, $firebaseObject) {
    var self = this;
    var ref = firebase.database().ref().child("data");
    var syncObject = $firebaseObject(ref);
    syncObject.$bindTo($scope, "data");
    var image = "http://geniussys.com/img/placeholder/blogpost-placeholder-100x100.png"
    self.teams = [
        {id: 1, name: 'Team 1', image},
        {id: 2, name: 'Team 2', image},
        {id: 3, name: 'Team 3', image},
        {id: 4, name: 'Team 4', image},
        {id: 5, name: 'Team 5', image}
    ]

    self.routeParams = $routeParams
    self.teamId = $window.localStorage.getItem('teamId')
    self.setTeam = function(id) {
        self.teamId = $window.localStorage.getItem('teamId') || $window.localStorage.setItem('teamId', id)
        // $scope.data[id]['allowSetTeam'] = false;
        // if ($scope.data[id]['allowSetTeam']) { 
        //     $window.localStorage.setItem('teamId', id)
        //     self.teamId = $window.localStorage.getItem('teamId')
        // }
    }
}