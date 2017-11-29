var TaskEmployee = (function () {
    function TaskEmployee(tasksList, employeeList) {
        var _this = this;
        this.taskEmployeeList = [];
        this.taskList = null;
        this.employeeList = null;
        this.taskList = tasksList;
        this.employeeList = employeeList;
        //this.assignEmployees();
        //this.nextEmployees();
        tasksList.get().forEach(function (task) {
            task.getShiftList().get().forEach(function (shift) {
                _this.taskEmployeeList.push({
                    shift: shift,
                    task: task,
                    employee: null
                });
            });
        });
        console.log(this.employeeList.employeeList[0].shiftList.shiftList.length);
        // console.log(this.taskEmployeeList);
        this.assignEmployees();
    }
    TaskEmployee.prototype.assignEmployees = function () {
        var _this = this;
        this.taskEmployeeList.forEach(function (taskEmployee) {
            //console.log(taskEmployee);
            // get next employee with low complexity and shift
            //for(var i=0; i)
            var nextEmployee = _this.employeeList.getLowComplexityShift(taskEmployee.shift)[0];
            taskEmployee.employee = nextEmployee;
            nextEmployee.addComplexity(taskEmployee.task.getComplexity());
        });
    };
    TaskEmployee.prototype.abc = function () {
        return this.employeeList.employeeList[0].shiftList.shiftList.length;
    };
    return TaskEmployee;
}());
