class Kuchenplaner {
    private employees = new EmployeesList();
    private tasks = new TasksList();


    constructor() {
        window.onload = (()=>{
            this.initKuchenplaner()
        })

    }

    private initKuchenplaner(){
       this.createDummyEmployees();
       this.createDummyTasks();
       let taskEmployee = new TaskEmployee(this.tasks, this.employees);
       this.renderTaskEmployee(taskEmployee);
    }


    public addEmployee(){
        let id = this.randomIdGenerator();
        let employeeFirstName = document.forms.addEmployee.vorname.value// document.getElementsByName("vorname")[0].value;
        let employeeLastName = document.forms.addEmployee.nachname.value ;
        let employeeFloor= document.forms.addEmployee.floor.value;
        let employeeFloorInt = parseInt(employeeFloor);
        let employee = new Employee(id,employeeFirstName,employeeLastName,employeeFloorInt);
        this.employees.addEmployee(employee)

    }
    private createDummyEmployees(){

        let employee = new Employee( this.randomIdGenerator(),' Peter', 'Meinhard',3,);
        //this.createDummysShift(employee.getShiftList());

        this.employees.addEmployee(employee);
        employee = new Employee(this.randomIdGenerator(),'Klaus', 'ist',3);
        //  this.createDummysShift(employee.getShiftList());

        this.employees.addEmployee(employee);
        employee = new Employee(this.randomIdGenerator(),'Markus', 'ein',3);
        this.createDummysShiftEmployee(employee.getShiftList());

        this.employees.addEmployee(employee);
        employee = new Employee(this.randomIdGenerator(),'Gabriel', 'JU',3);

        //employee.addShiftList(this.createDummysShift());
        this.employees.addEmployee(employee);
        employee = new Employee(this.randomIdGenerator(),'Hami', 'JO',3);

        this.employees.addEmployee(employee);
    }
    public randomIdGenerator(){
        return Math.random().toString(36).substr(2, 10);

    }
    public viewEmployeeList(){
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
        document.getElementById("employeeList").innerHTML = tableArray;

    }

    public renderTaskEmployee(taskEmployee){
        let tableArray="<th>Tage / Aufgaben </th>";
        let taskArray=[];

        for(let i=0; i < taskEmployee.get().length;i++ ){
            taskArray.push(taskEmployee.get()[i].task.name);
        }
        taskArray = taskArray.filter( function( name, index, Array ) {
            return Array.indexOf(name) == index;
        });
        taskArray.forEach((taskArrayElement)=>{
            tableArray +="<th>"+taskArrayElement+"</th>";
        });

        let dayArray =[];
        for(let i=0; i < taskEmployee.get().length;i++ ){
            dayArray.push(taskEmployee.get()[i].shift.name);
        }
        dayArray= dayArray.filter( function( name, index, Array ) {
            return Array.indexOf(name) == index;
        });
        dayArray.forEach((dayArrayElement)=>{
            tableArray +="<tr><td>"+dayArrayElement+"</td></tr>";
        });
        document.getElementById("taskEmployeeList").innerHTML= tableArray;
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