angular.module('girlsday')
  .controller('MainController', MainController)

MainController.$inject = ['$scope', '$routeParams', '$window', '$firebaseObject']

function MainController ($scope, $routeParams, $window, $firebaseObject) {
  var self = this
  var ref = firebase.database().ref().child('data')
  $firebaseObject(ref).$bindTo($scope, 'data')
  var ref = firebase.database().ref().child('sec')
  $firebaseObject(ref).$bindTo($scope, 'sec')

  self.teams = [
    {id: 'security', name: 'IT-Security', image: './images/security.jpg'},
    {id: 'pm', name: 'IT-Projektmanagement', image: './images/pm.jpg'},
    {id: 'iot', name: 'Internet of Things', image: './images/iot.jpg'},
    {id: 'games', name: 'Spiele-Entwicklung', image: './images/games.jpg'},
    {id: 'backend', name: 'Backend-Entwicklung', image: './images/backend.jpg'},
    {id: 'beratung', name: 'IT-Beratung', image: './images/beratung.jpg'}
  ]

  self.questions = [
    'Wie gelangen Internetseiten in den Browser?',
    'Warum wird Ruby als einfache Programmiersprache bezeichnet?',
    'Wofür benötigen Unternehmen IT–Projektmanager?',
    'Was unterscheidet einen IT-Projektmanager von einem normalen Projektmanager?',
    'Wie nennt man jemanden, der sich unberechtigten Zugriff auf einen fremden Computer verschafft?',
    'Wie sieht ein sicheres Passwort aus?',
    'Auf welchen vier Gewerken beruht die Game Entwicklung?',
    'Was ist der Unterschied zwischen Digital Art und Game Design?',
    'Was bedeutet das Logo am Stand IT Beratung?',
    'Welche Fähigkeiten brauchen IT Berater/Innen?',
    'Wer hat den Begriff "Internet of Things" erstmals verwendet und wann war das ungefähr?',
    'Welchen Zusammenhang gibt es zwischen dem "Internet der Dinge" und Mode?'
  ]

  self.routeParams = $routeParams
  self.userId = $window.localStorage.getItem('userId')
  if (!self.userId) {
    self.userId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
    $window.localStorage.setItem('userId', self.userId)
  }

  self.setTeam = function (name) {
    if (!$scope.sec[self.userId]) {
      $scope.sec[self.userId] = name
    }
    if ($scope.sec[self.userId] === name) {
      self.team = name
    } else {
      self.team = null
    }
  }
}
