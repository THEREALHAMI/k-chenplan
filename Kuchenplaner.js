var Kuchenplaner = (function () {
    function Kuchenplaner() {
        var _this = this;
        this.employees = new EmployeesList();
        this.tasks = new TasksList();
        window.onload = (function () {
            _this.initKuchenplaner();
        });
        /*this.addEmployee();
        this.addTask();
        this.addDay(); */
        //console.log(this.employees);
    }
    Kuchenplaner.prototype.initKuchenplaner = function () {
        this.createDummyEmployees();
        this.createDummyTasks();
        var taskEmployee = new TaskEmployee(this.tasks, this.employees);
        this.viewTaskEmployeeList(taskEmployee);
    };
    Kuchenplaner.prototype.createDummyEmployees = function () {
        var employee = new Employee('Peter', 'Holzmann', 3);
        this.createDummysShiftEmployee(employee.getShiftList());
        this.employees.addEmployee(employee);
        employee = new Employee('Klaus', 'Herman', 3);
        this.createDummysShiftEmployee(employee.getShiftList());
        this.employees.addEmployee(employee);
        employee = new Employee('Markus', 'Propst', 3);
        this.createDummysShiftEmployee(employee.getShiftList());
        this.employees.addEmployee(employee);
        employee = new Employee('Gabriel', 'Barth', 3);
        this.createDummysShiftEmployee(employee.getShiftList());
        this.employees.addEmployee(employee);
        employee = new Employee('Hami', 'Yildiz', 3);
        this.createDummysShiftEmployee(employee.getShiftList());
        this.employees.addEmployee(employee);
    };
    /*public addTask(){
         let taskName = prompt("Aufgabenname");
         let task = new Task(taskName);
         this.tasks.addTask(task);
     }
     public addDay(){
         let dayName = prompt("Tag Name");
         let day = new Day(dayName);
         this.days.addDay(day);
     }*/
    Kuchenplaner.prototype.addEmployee = function () {
        var firstName = document.forms.addEmployee.vorname.value;
        var lastName = document.forms.addEmployee.nachname.value;
        var floor = parseInt(document.forms.addEmployee.etage.value);
        var employee = new Employee(firstName, lastName, floor);
        this.employees.addEmployee(employee);
        this.createDummysShiftEmployee(employee.getShiftList());
    };
    Kuchenplaner.prototype.viewEmployeeList = function () {
        var tableArray = "";
        var objectProperty = Object.getOwnPropertyNames(this.employees.get()[0]);
        for (var i = 0; i < objectProperty.length; i++) {
            tableArray += "<th>" + objectProperty[i] + "</th>";
        }
        for (var i = 0; i < this.employees.get().length; i++) {
            tableArray += "<tr><td>" + this.employees.get()[i].getId() + "</td>" +
                "<td>" + this.employees.get()[i].getFirstName() + "</td>" +
                "<td>" + this.employees.get()[i].getLastName() + "</td>" +
                "<td>" + this.employees.get()[i].getComplexity() + "</td><td>" + this.employees.get()[i].getFloor() + "</td></tr>";
        }
        document.getElementById("employeeList").innerHTML = tableArray;
    };
    Kuchenplaner.prototype.viewTaskEmployeeList = function (taskEmployee) {
        var tableArray = "";
        var objectProperty = Object.getOwnPropertyNames(taskEmployee.get()[0]);
        for (var i = 0; i < objectProperty.length; i++) {
            tableArray += "<th>" + objectProperty[i] + "</th>";
        }
        for (var i = 0; i < taskEmployee.get().length; i++) {
            tableArray += "<tr><td>" + taskEmployee.get()[i].shift.name + "</td>" +
                "<td>" + taskEmployee.get()[i].task.name + "</td>" +
                "<td>" + taskEmployee.get()[i].employee + "</td></tr>";
        }
        document.getElementById("taskEmployeeList").innerHTML = tableArray;
    };
    Kuchenplaner.prototype.createDummyTasks = function () {
        var task = new Task('Spühlmaschine', 3, '4');
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Townhall', 3, 5);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Maschine', 2, 4);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Maschine', 1, 2);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Maschine', 4, 1);
        this.createDummysShift(task.getShiftList());
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
