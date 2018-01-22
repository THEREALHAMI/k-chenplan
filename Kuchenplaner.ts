class Kuchenplaner {
    private employeeList: EmployeeList = new EmployeeList();
    private taskList:TasksList = new TasksList();
    private viewEmployeeList: ViewEmployeeList = new ViewEmployeeList();
    private viewTaskEmployee: ViewTaskEmployee = new ViewTaskEmployee();
    private viewTaskList: ViewTaskList = new ViewTaskList();

    private shiftList: ShiftList = new ShiftList();

    constructor() {
        window.onload = (()=>{
            this.initKuchenplaner();
        })

    }

    private initKuchenplaner(){
        this.shiftList.getShiftsFromDatabank();

        this.employeeList.getEmployeesFromDatabank();

        this.employeeList.pushShiftsToEmployee(this.shiftList);


        this.taskList.getTaskFromDatabank();

        this.taskList.pushShiftsToTask(this.shiftList);

        //console.log(this.employeeList.get());
        let taskEmployee = new TaskEmployee(this.taskList, this.employeeList);

        this.viewTaskEmployee.renderTaskEmployee(taskEmployee, this.taskList);
    }
}