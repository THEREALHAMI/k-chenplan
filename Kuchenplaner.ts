class Kuchenplaner {
    private employees = new EmployeesList();
    private tasks = new TasksList();


    constructor() {

        window.onload = (()=>{
            this.initKuchenplaner()
        })
        /*this.addEmployee();
        this.addTask();
        this.addDay(); */
        //console.log(this.employees);

    }

    private initKuchenplaner(){
        this.createDummyEmployees();
        this.createDummyTasks();
        let taskEmployee = new TaskEmployee(this.tasks, this.employees);
        this.viewTaskEmployeeList(taskEmployee);
    }
    private createDummyEmployees(){

        let employee = new Employee('Peter', 'Holzmann',3,);
        this.createDummysShiftEmployee(employee.getShiftList());
        this.employees.addEmployee(employee);

        employee = new Employee('Klaus', 'Herman',3);
        this.createDummysShiftEmployee(employee.getShiftList());
        this.employees.addEmployee(employee);

        employee = new Employee('Markus', 'Propst',3);
        this.createDummysShiftEmployee(employee.getShiftList());
        this.employees.addEmployee(employee);

        employee = new Employee('Gabriel', 'Barth',3);
        this.createDummysShiftEmployee(employee.getShiftList());
        this.employees.addEmployee(employee);

        employee = new Employee('Hami', 'Yildiz',3);
        this.createDummysShiftEmployee(employee.getShiftList());
        this.employees.addEmployee(employee);
    }

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
    public addEmployee() {
        let firstName = document.forms.addEmployee.vorname.value;
        let lastName = document.forms.addEmployee.nachname.value;
        let floor =  parseInt(document.forms.addEmployee.etage.value);
        let employee = new Employee(firstName, lastName, floor);
        this.employees.addEmployee(employee);
        this.createDummysShiftEmployee(employee.getShiftList());

    }

    public viewEmployeeList(){
        let tableArray="";

        let objectProperty = Object.getOwnPropertyNames(this.employees.get()[0]);

        for(let i =0; i < objectProperty.length; i++){
            tableArray+="<th>"+objectProperty[i]+"</th>";
        }
        for(let i=0; i < this.employees.get().length; i++){

            tableArray+="<tr><td>" + this.employees.get()[i].getId() + "</td>" +
                "<td>" + this.employees.get()[i].getFirstName() + "</td>"+
                "<td>" + this.employees.get()[i].getLastName() + "</td>" +
                "<td>" + this.employees.get()[i].getComplexity()+ "</td><td>" + this.employees.get()[i].getFloor() + "</td></tr>";
        }
            document.getElementById("employeeList").innerHTML = tableArray;
    }

    public viewTaskEmployeeList(taskEmployee){
        let tableArray = "";
        let objectProperty = Object.getOwnPropertyNames(taskEmployee.get()[0]);
        for(let i = 0; i < objectProperty.length; i++){
            tableArray+="<th>"+objectProperty[i]+"</th>";
        }
        for(let i = 0; i < taskEmployee.get().length; i++){
            tableArray+="<tr><td>" + taskEmployee.get()[i].shift.name + "</td>" +
                "<td>" + taskEmployee.get()[i].task.name + "</td>"+
                "<td>" + taskEmployee.get()[i].employee + "</td></tr>";
        }
        document.getElementById("taskEmployeeList").innerHTML = tableArray;
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
        task = new Task('Maschine',1,2);
        this.createDummysShift(task.getShiftList());
        this.tasks.addTask(task);
        task = new Task('Maschine',4,1);
        this.createDummysShift(task.getShiftList());
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


}

