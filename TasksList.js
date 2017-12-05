var TasksList = (function () {
    function TasksList() {
        this.tasksList = [];
    }
    TasksList.prototype.addTask = function (task) {
        this.tasksList.push(task);
    };
    TasksList.prototype.get = function () {
        return this.tasksList;
    };
    TasksList.prototype.loadTasksList = function () {
    };
    TasksList.prototype.saveTasksList = function () {
    };
    return TasksList;
}());
