var Kuchenplaner = /** @class */ (function () {
    function Kuchenplaner() {
        var _this = this;
        this.employees = new EmployeesList();
        this.tasks = new TasksList();
        this.viewEmployeesListe = new ViewEmployeeList();
        this.viewTaskEmployee = new ViewTaskEmployee();
        window.onload = (function () {
            _this.initKuchenplaner();
        });
    }
    Kuchenplaner.prototype.initKuchenplaner = function () {
        // this.createDummyEmployees();
        this.createDummyTasks();
        var taskEmployee = new TaskEmployee(this.tasks, this.employees);
        this.viewTaskEmployee.renderTaskEmployee(taskEmployee, this.tasks);
    };
    Kuchenplaner.prototype.createDummyTasks = function () {
        var task = new Task('Spühlmaschine', 3, 4);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Townhall', 3, 5);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Maschine', 2, 4);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Fenster', 1, 2);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Wasserkocher', 4, 1);
        // this.createDummysShiftEmployeeWasserkocher(task.getShiftList());
        this.tasks.addTask(task);
    };
    Kuchenplaner.prototype.createDummysShift = function (shiftList) {
        var shift = new Shift('Montag', '0', 7, 15);
        shiftList.addShift(shift);
        shift = new Shift('Dienstag', '0', 7, 22);
        shiftList.addShift(shift);
        shift = new Shift('Mittwoch', '0', 7, 22);
        shiftList.addShift(shift);
        shift = new Shift('Donnerstag', '0', 7, 22);
        shiftList.addShift(shift);
        shift = new Shift('Freitag', '0', 7, 22);
        shiftList.addShift(shift);
    };
    Kuchenplaner.prototype.createDummysShiftEmployee = function (shiftList) {
        var shift = new Shift('Montag', '0', 16, 20);
        shiftList.addShift(shift);
        shift = new Shift('Dienstag', '0', 7, 22);
        shiftList.addShift(shift);
        shift = new Shift('Mittwoch', '0', 7, 22);
        shiftList.addShift(shift);
        shift = new Shift('Donnerstag', '0', 7, 22);
        shiftList.addShift(shift);
        shift = new Shift('Freitag', '0', 7, 22);
        shiftList.addShift(shift);
    };
    return Kuchenplaner;
}());
