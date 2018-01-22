var TasksList = (function () {
    function TasksList() {
        this.tasksList = [];
        this.adapter = new AjaxAdapter();
    }
    TasksList.prototype.getTaskFromDatabank = function () {
        var _this = this;
        this.adapter.get("http://localhost:3000/api/Tasks", function (data) {
            if (data)
                _this.taskListObj = data;
            _this.createNewTask(_this.taskListObj);
        });
    };
    TasksList.prototype.createNewTask = function (data) {
        var _this = this;
        data.forEach(function (elment) {
            var task = new Task(elment.name, elment.complexity, elment.floor, elment.id);
            _this.addTask(task);
        });
    };
    TasksList.prototype.pushShiftsToTask = function (shiftList) {
        var shifts = this.filterTaskShiftsFromShiftList(shiftList);
        this.tasksList.forEach(function (element) {
            shifts.forEach(function (shift) {
                if (element.getId() === shift.getShiftId()) {
                    element.addShift(shift);
                }
            });
        });
    };
    TasksList.prototype.filterTaskShiftsFromShiftList = function (shiftList) {
        var taskShifts = shiftList.get().filter(function (data) {
            return (data.getShiftType() === "Task");
        });
        return taskShifts;
    };
    TasksList.prototype.addTask = function (task) {
        this.tasksList.push(task);
    };
    TasksList.prototype.get = function () {
        return this.tasksList;
    };
    return TasksList;
}());
