var Kuchenplaner = (function () {
    function Kuchenplaner() {
        var _this = this;
        this.employeeList = new EmployeeList();
        this.taskList = new TasksList();
        this.viewEmployeeList = new ViewEmployeeList();
        this.viewTaskEmployee = new ViewTaskEmployee();
        this.viewTaskList = new ViewTaskList();
        this.shiftList = new ShiftList();
        window.onload = (function () {
            _this.initKuchenplaner();
        });
    }
    Kuchenplaner.prototype.initKuchenplaner = function () {
        this.shiftList.getShifts();
        this.employeeList.getEmployees();
        this.employeeList.pushShiftsToEmployee(this.shiftList);
        this.taskList.getTasks();
        this.taskList.pushShiftsToTask(this.shiftList);
        console.log(this.taskList.get());
        //console.log(this.employeeList.get());
        var taskEmployee = new TaskEmployee(this.taskList, this.employeeList);
        this.viewTaskEmployee.renderTaskEmployee(taskEmployee, this.taskList);
        console.log(this.employeeList);
    };
    return Kuchenplaner;
}());
