var TaskEmployee = /** @class */ (function () {
    function TaskEmployee(tasksList, employeeList) {
        //this.assignEmployees();
        //this.nextEmployees();
        var _this = this;
        this.taskEmployeeList = [];
        tasksList.get().forEach(function (task) {
            task.getShiftList().get().forEach(function (shift) {
                _this.taskEmployeeList.push({
                    shift: shift,
                    task: task,
                    employee: null
                });
            });
        });
        //console.log(employeeList);
        // console.log(employeeList.get()[0].shiftList.get().length);
        this.assignEmployees(employeeList);
        // console.table(this.taskEmployeeList);
    }
    TaskEmployee.prototype.assignEmployees = function (employeeList) {
        this.taskEmployeeList.forEach(function (taskEmployee) {
            //console.log(taskEmployee);
            // get next employee with low complexity and shift
            //for(var i=0; i)
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
