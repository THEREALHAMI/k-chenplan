var Kuchenplaner = /** @class */ (function () {
    function Kuchenplaner() {
        var _this = this;
        this.employees = new EmployeesList();
        this.tasks = new TasksList();
        this.viewEmployeeList = new ViewEmployeeList();
        this.viewTaskEmployee = new ViewTaskEmployee();
        this.viewTaskList = new ViewTaskList();
        this.shiftList = new ShiftList();
        window.onload = (function () {
            _this.initKuchenplaner();
        });
    }
    Kuchenplaner.prototype.initKuchenplaner = function () {
        //this.createDummyEmployees();
        //this.createDummyTasks();
        this.shiftList.getShifts();
        /*let taskEmployee = new TaskEmployee(this.tasks, this.employees);
        this.viewTaskEmployee.renderTaskEmployee(taskEmployee, this.tasks);*/
    };
    return Kuchenplaner;
}());
