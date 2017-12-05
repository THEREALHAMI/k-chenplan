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
        this.viewEmployeeList();
    }
    private createDummyEmployees(){

        let employee = new Employee('Peter', 'Meinhard',3,);
       //this.createDummysShift(employee.getShiftList());

        this.employees.addEmployee(employee);
        employee = new Employee('Klaus', 'ist',3);
      //  this.createDummysShift(employee.getShiftList());

        this.employees.addEmployee(employee);
        employee = new Employee('Markus', 'ein',3);
        this.createDummysShiftEmployee(employee.getShiftList());

        this.employees.addEmployee(employee);
        employee = new Employee('Gabriel', 'JU',3);

        //employee.addShiftList(this.createDummysShift());
        this.employees.addEmployee(employee);
        employee = new Employee('Hami', 'JO',3);

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
        let employeeName = prompt("Name");
        let employee = new Employee(employeeName);
        this.employees.addEmployee(employee);
    }

    private viewEmployeeList(){
        let tableArray="";

        var objectProperty = Object.getOwnPropertyNames(this.employees.get()[0]);

        for(let i =0; i < objectProperty.length; i++){
            tableArray+="<th>"+objectProperty[i]+"</th>";
        }
        for(let i=0; i < this.employees.get().length; i++){

            tableArray+="<tr><td>" + this.employees.get()[i].getId() + "</td>" +
                "<td>" + this.employees.get()[i].getFirstName() + "</td>"+
                "<td>" + this.employees.get()[i].getLastName() + "</td>" +
                "<td>" + this.employees.get()[i].getComplexity()+ "</td><td>" + this.employees.get()[i].getFloor() + "</td></tr>";
        }
        document.getElementById("viewEmployeeList").onclick = (()=> {

            document.getElementById("employeeList").innerHTML = tableArray;
        });
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
