class Kuchenplaner {
    private employees = new EmployeesList();
    private tasks = new TasksList();

    constructor() {
        this.createDummyEmployees();
        this.createDummyTasks();

        let taskEmployee = new TaskEmployee(this.tasks, this.employees);

        /*this.addEmployee();
        this.addTask();
        this.addDay(); */
        //console.log(this.employees);
    }

    private createDummyEmployees(){

        let employee = new Employee('Peter', 0,3,);
       this.createDummysShift(employee.getShiftList());

        this.employees.addEmployee(employee);
        employee = new Employee('Klaus', 4,3);
        this.createDummysShift(employee.getShiftList());

        this.employees.addEmployee(employee);
        employee = new Employee('Markus', 2,3);
        //employee.addShiftList(this.createDummysShift());
        this.employees.addEmployee(employee);
        employee = new Employee('Gabriel', 3,3);
        //employee.addShiftList(this.createDummysShift());
        this.employees.addEmployee(employee);
        employee = new Employee('Hami', 1,3);
        //employee.addShiftList(this.createDummysShift());
        this.employees.addEmployee(employee);
    }

    /* public addTask(){
         let taskName = prompt("Aufgabenname");
         let task = new Task(taskName);
         this.tasks.addTask(task);
     }
     public addEmployee() {
         let employeeName = prompt("Name");
         let employee = new Employee(employeeName);
         this.employees.addEmployee(employee);
     }
     public addDay(){
         let dayName = prompt("Tag Name");
         let day = new Day(dayName);
         this.days.addDay(day);
     } */

    private createDummyTasks(){
        let task = new Task('Spühlmaschine',3, '4');
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Townhall',3,5);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Maschine',2,4);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Maschine',1,2);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Maschine',4,1);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
    }
    private createDummysShift(shiftList) {
        let shift = new Shift('Montag', '0',7,22);
        shiftList.addShift(shift);
        shift = new Shift('Dienstag', '0',7,22);
        shiftList.addShift(shift);
        shift = new Shift('Mittwoch', '0',7,22);
        shiftList.addShift(shift);
        shift = new Shift('Donnerstag', '0',7,22);
        shiftList.addShift(shift);
        shift = new Shift('Freitag', '0',7,22);
        shiftList.addShift(shift);
    }
}

