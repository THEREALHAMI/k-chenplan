var TaskEmployee = (function () {
    function TaskEmployee(tasksList, employeeList) {
        var _this = this;
        this.taskEmployeeList = [];
        tasksList.get().forEach(function (task) {
            task.getShiftList().forEach(function (shift) {
                _this.taskEmployeeList.push({
                    shift: shift,
                    task: task,
                    employee: null
                });
            });
        });
        // console.log(employeeList.get()[0].shiftList.get().length);
        this.assignEmployees(employeeList);
        //this.giveEmployeebyTaskandShift();
    }
    TaskEmployee.prototype.get = function () {
        return this.taskEmployeeList;
    };
    TaskEmployee.prototype.assignEmployees = function (employeeList) {
        this.taskEmployeeList.forEach(function (taskEmployee) {
            // get next employee with low complexity and shift
            var nextEmployee = employeeList.getLowComplexityShift(taskEmployee.shift)[0];
            if (typeof nextEmployee === "undefined") {
                console.error('kein Mitarbeiter fuer diese Schicht gefunden ');
                return;
            }
            taskEmployee.employee = nextEmployee;
            nextEmployee.addComplexity(taskEmployee.task.getComplexity());
        });
    };
    return TaskEmployee;
}());
