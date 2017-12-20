class Kuchenplaner {
    private employees = new EmployeesList();
    private tasks = new TasksList();
    private viewEmployeesListe = new ViewEmployeeList();
    private viewTaskEmployee = new ViewTaskEmployee();



    constructor() {
        window.onload = (()=>{
            this.initKuchenplaner()

        })

    }


    private initKuchenplaner(){
      // this.createDummyEmployees();
       this.createDummyTasks();
       let taskEmployee = new TaskEmployee(this.tasks, this.employees);
       this.viewTaskEmployee.renderTaskEmployee(taskEmployee, this.tasks);

    }

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
        task = new Task('Fenster',1,2);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Wasserkocher',4,1);
       // this.createDummysShiftEmployeeWasserkocher(task.getShiftList());
        this.tasks.addTask(task);
    }
    private createDummysShift(shiftList) {
        let shift = new Shift('Montag', '0',7,15);
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

    private createDummysShiftEmployee(shiftList) {
        let shift = new Shift('Montag', '0',16,20);
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
    /* private createDummysShiftEmployeeWasserkocher(shiftList) {

        let shift = new Shift('Mittwoch', '0',7,22);
        shiftList.addShift(shift);

         private createDummyEmployees(){

        let employee = new Employee( 0,'Peter', 'Meinhard',3,);
        this.createDummysShift(employee.getShiftList());

        this.employees.addEmployee(employee);
        employee = new Employee(0,'Klaus', 'juti',3);
        this.createDummysShift(employee.getShiftList());

        this.employees.addEmployee(employee);
        employee = new Employee(0,'Markus', 'lukizu',3);
        this.createDummysShiftEmployee(employee.getShiftList());

        this.employees.addEmployee(employee);
        employee = new Employee(0,'Gabriel', 'olli',3);
       // this.createDummysShift(employee.getShiftList());


        this.employees.addEmployee(employee);
        employee = new Employee(0,'Hami', 'polas',3);

        this.employees.addEmployee(employee);
    } */

}