var TasksList = /** @class */ (function () {
    function TasksList() {
        this.tasksList = [];
        this.adapter = new AjaxAdapter();
        //this.adapter.get("http://localhost:3000/api/Tasks",(data)=>{this.taskFromDatabank(data)});
    }
    TasksList.prototype.taskFromDatabank = function (data) {
        var _this = this;
        data.forEach(function (elment) {
            var task = new Task(elment.name, elment.complexity, elment.floor, elment.id);
            _this.addTask(task);
        });
    };
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
