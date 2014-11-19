var scotchIO = angular.module('scotchIO', ['ngRoute'] {
  function mainController($scope, $http) {
    $scope.formData = {};

    // get all todos
    $http.get('/api/todos')
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      });
      .error(function(data) {
        console.log('Error ' + data);
      })

    // create todo
    $scope.createTodo = function() {
      $http.post('/api/todos', $scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error ' + data);
        })

    // delete a todo
    $scope.deleteTodo = function() {
      $http.delete('/api/todos' + id)
        .success(function(data) {
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error ' + data);
        })
    };
  });
});