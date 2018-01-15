class Kuchenplaner {
    private employeeList:EmployeeList = new EmployeeList();
    private taskList: TasksList = new TasksList();
    private viewEmployeeList = new ViewEmployeeList();
    private viewTaskEmployee = new ViewTaskEmployee();
    private viewTaskList = new ViewTaskList();

    private shiftList: ShiftList = new ShiftList();

    constructor() {
        window.onload = (()=>{
            this.initKuchenplaner();
        })

    }

    private initKuchenplaner(){
        //this.createDummyEmployees();
        //this.createDummyTasks();
        this.shiftList.getShifts();
        this.employeeList.getEmployees();
        this.taskList.getTasks();
        console.log(this.taskList.get());
        //console.log(this.employeeList.get());
        let taskEmployee = new TaskEmployee(this.taskList, this.employeeList);
        this.viewTaskEmployee.renderTaskEmployee(taskEmployee, this.taskList);
    }
}