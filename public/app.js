angular.module("girlsday",["ngRoute","firebase"])
.config(MainRouter);

MainRouter.$inject = ["$routeProvider", "$locationProvider"];

function MainRouter($routeProvider, $locationProvider){
  $routeProvider
    .when("/:teamId/names", {
      templateUrl: "templates/names.html"
    })
    .when("/:teamId/questions", {
      templateUrl: "templates/questions.html"
    })
    .when("/userid", {
      templateUrl: "templates/userid.html"
    })
    .when("/", {
      templateUrl: "templates/start.html"
    })
    .otherwise({
      redirectTo: "/"
    });
}