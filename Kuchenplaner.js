var Kuchenplaner = /** @class */ (function () {
    function Kuchenplaner() {
        var _this = this;
        this.employees = new EmployeesList();
        this.tasks = new TasksList();
        window.onload = (function () {
            _this.initKuchenplaner();
        });
    }
    Kuchenplaner.prototype.initKuchenplaner = function () {
        this.createDummyEmployees();
        this.createDummyTasks();
        var taskEmployee = new TaskEmployee(this.tasks, this.employees);
        this.renderTaskEmployee(taskEmployee);
    };
    Kuchenplaner.prototype.addEmployee = function () {
        var id = this.randomIdGenerator();
        var employeeFirstName = document.forms.addEmployee.vorname.value; // document.getElementsByName("vorname")[0].value;
        var employeeLastName = document.forms.addEmployee.nachname.value;
        var employeeFloor = document.forms.addEmployee.floor.value;
        var employeeFloorInt = parseInt(employeeFloor);
        var employee = new Employee(id, employeeFirstName, employeeLastName, employeeFloorInt);
        this.employees.addEmployee(employee);
    };
    Kuchenplaner.prototype.createDummyEmployees = function () {
        var employee = new Employee(this.randomIdGenerator(), ' Peter', 'Meinhard', 3);
        //this.createDummysShift(employee.getShiftList());
        this.employees.addEmployee(employee);
        employee = new Employee(this.randomIdGenerator(), 'Klaus', 'ist', 3);
        //  this.createDummysShift(employee.getShiftList());
        this.employees.addEmployee(employee);
        employee = new Employee(this.randomIdGenerator(), 'Markus', 'ein', 3);
        this.createDummysShiftEmployee(employee.getShiftList());
        this.employees.addEmployee(employee);
        employee = new Employee(this.randomIdGenerator(), 'Gabriel', 'JU', 3);
        //employee.addShiftList(this.createDummysShift());
        this.employees.addEmployee(employee);
        employee = new Employee(this.randomIdGenerator(), 'Hami', 'JO', 3);
        this.employees.addEmployee(employee);
    };
    Kuchenplaner.prototype.randomIdGenerator = function () {
        return Math.random().toString(36).substr(2, 10);
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
    Kuchenplaner.prototype.renderTaskEmployee = function (taskEmployee) {
        var tableArray = "<th>Tage / Aufgaben </th>";
        var taskArray = [];
        for (var i = 0; i < taskEmployee.get().length; i++) {
            taskArray.push(taskEmployee.get()[i].task.name);
        }
        taskArray = taskArray.filter(function (name, index, Array) {
            return Array.indexOf(name) == index;
        });
        taskArray.forEach(function (taskArrayElement) {
            tableArray += "<th>" + taskArrayElement + "</th>";
        });
        var dayArray = [];
        for (var i = 0; i < taskEmployee.get().length; i++) {
            dayArray.push(taskEmployee.get()[i].shift.name);
        }
        dayArray = dayArray.filter(function (name, index, Array) {
            return Array.indexOf(name) == index;
        });
        dayArray.forEach(function (dayArrayElement) {
            tableArray += "<tr><td>" + dayArrayElement + "</td></tr>";
        });
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
        task = new Task('Fenster', 1, 2);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Wasserkocher', 4, 1);
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
