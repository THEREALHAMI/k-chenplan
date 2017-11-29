class TaskEmployee{
    private taskEmployeeList=[];


    private taskList = null;
    private employeeList = null;

    constructor(tasksList, employeeList){
        this.taskList = tasksList;
        this.employeeList = employeeList;
        //this.assignEmployees();
        //this.nextEmployees();


        tasksList.get().forEach((task: Task) => {
            task.getShiftList().get().forEach((shift: Shift) => {

                this.taskEmployeeList.push({
                    shift: shift,
                    task: task,
                    employee: null
                });


            });
        });

        console.log(this.employeeList.employeeList[0].shiftList.shiftList.length);


       // console.log(this.taskEmployeeList);

        this.assignEmployees();


    }


    public assignEmployees(){

        this.taskEmployeeList.forEach((taskEmployee)=>{



            //console.log(taskEmployee);
            // get next employee with low complexity and shift


            //for(var i=0; i)

            let nextEmployee: Employee = this.employeeList.getLowComplexityShift(taskEmployee.shift)[0];

            taskEmployee.employee = nextEmployee;
            nextEmployee.addComplexity(taskEmployee.task.getComplexity());

        })
    }

    public abc(){
         return this.employeeList.employeeList[0].shiftList.shiftList.length;
    }




}
