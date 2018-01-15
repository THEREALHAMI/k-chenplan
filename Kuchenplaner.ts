class Kuchenplaner {
    private employees = new EmployeesList();
    private tasks = new TasksList();
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
        /*let taskEmployee = new TaskEmployee(this.tasks, this.employees);
        this.viewTaskEmployee.renderTaskEmployee(taskEmployee, this.tasks);*/
    }
}