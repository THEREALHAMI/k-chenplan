class TaskEmployee{
    private taskEmployeeList=[];



    constructor(tasksList, employeeList){

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

        //console.log(employeeList);
       // console.log(employeeList.get()[0].shiftList.get().length);



        this.assignEmployees(employeeList);
        this.giveEmployeebyTaskandShift();
        console.log(this.taskEmployeeList);
    }
    public get(){
        return this.taskEmployeeList;
    }

    public assignEmployees(employeeList){

        this.taskEmployeeList.forEach((taskEmployee)=>{

            //console.log(taskEmployee);
            // get next employee with low complexity and shift


            //for(var i=0; i)

            let nextEmployee: Employee = employeeList.getLowComplexityShift(taskEmployee.shift)[0];
            if(typeof nextEmployee === "undefined"){
                console.error('kein Mitarbeiter fuer diese Schicht gefunden ');
                return;
            }
            taskEmployee.employee = nextEmployee;
            nextEmployee.addComplexity(taskEmployee.task.getComplexity());

        })
    }

    public giveEmployeebyTaskandShift(){
      this.taskEmployeeList.forEach((element)=>{
            //console.log(element);

      });




    }

}
