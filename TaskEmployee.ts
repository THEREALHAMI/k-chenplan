class TaskEmployee{
    private taskEmployeeList:Array<any>=[];

    constructor(tasksList, employeeList){


        tasksList.get().forEach((task: Task) => {

            task.getShiftList().forEach((shift: Shift) => {

                this.taskEmployeeList.push({
                    shift: shift,
                    task: task,
                    employee: null
                });

            });

        });

        this.assignEmployees(employeeList);


    }
    public get(){
        return this.taskEmployeeList;
    }

    public assignEmployees(employeeList){

        this.taskEmployeeList.forEach((taskEmployee)=>{

            // get next employee with low complexity and shiftList
            let nextEmployee: Employee = employeeList.getLowComplexityShift(taskEmployee.shift)[0];
            if(typeof nextEmployee === "undefined"){
                console.error('kein Mitarbeiter fuer diese Schicht gefunden ');
                return;
            }
            taskEmployee.employee = nextEmployee;
            nextEmployee.addComplexity(taskEmployee.task.getComplexity());

        })

    }




}
