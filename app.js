var app = angular.module('todoApp', []);

app.component('todoList',  {
  template: `
    <form ng-submit="vm.addTodo()">
      <p> Title: <input type="text" ng-model="vm.newTodo.title"></p>
      <p> Description: <input type="text" ng-model="vm.newTodo.description"></p>
      <p> Price: <input type="text" ng-model="vm.newTodo.price"></p>
      <button type="submit">Submit</button>
    </form>
    <h3>Todo list</h3>
    <ul>
      <li ng-repeat="todo in vm.todos">
        <p>Title: {{todo.title}}</p>
        <p>Description: {{todo.description}}</p>
        <p>Price: {{todo.price | currency: $}}</p>
        <button ng-click="vm.deleteTodo($index)">Delete</button>
        <button ng-click="vm.editTodo($index)">Edit</button>
      </li>
    </ul>
    <form ng-submit="vm.updateTodo()">
      <p> Title: <input type="text" ng-model="vm.currentTodo.title"></p>
      <p> Description: <input type="text" ng-model="vm.currentTodo.description"></p>
      <button type="submit">Submit</button>
    </form>
  `,
  controller: function() {
    var vm = this;

    vm.todos = [];
    vm.currentTodo = {};
    vm.index = 0;

    vm.addTodo = function() {
      vm.todos.push(vm.newTodo);
      console.log(this);
      vm.newTodo = null;
    }

    vm.editTodo = function(index) {
      vm.currentTodo.title = vm.todos[index].title;
      vm.currentTodo.description = vm.todos[index].description;
      vm.currentTodo.price = vm.todos[index].price;
      vm.index = index;
    }

    vm.updateTodo = function() {
      vm.todos[vm.index].title = vm.currentTodo.title;
      vm.todos[vm.index].description = vm.currentTodo.description;
      vm.todos[vm.index].price = vm.currentTodo.price;
    }

    vm.deleteTodo = function(index) {
      console.log('current index: ', index);
      vm.todos.splice(index, 1);
    }

  },
  controllerAs: 'vm'
})
