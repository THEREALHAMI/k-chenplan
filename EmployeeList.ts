 class EmployeesList {
    private employeeList : Array<Employee> = [];
    private adapter = new AjaxAdapter();
    constructor() {
        this.adapter.get("http://localhost:3000/api/Employees",(data)=>{this.employeeFromDatabank(data)});
<<<<<<< HEAD

=======
        console.log(this.employeeList);
>>>>>>> Chris
    }

    public addEmployee(employee){
        this.employeeList.push(employee);
    }

    private employeeFromDatabank(data)
    {
          data.forEach((elment)=>{

          let employee = new Employee(elment.firstname,elment.lastname, elment.floor,elment.complexity , elment.id);
            this.addEmployee(employee);
        });


    }

    public get(): Array<Employee>{
        return this.employeeList;
    }

<<<<<<< HEAD

    public getLowComplexityShift(shift:Shift){

=======

    public getLowComplexityShift(shift:Shift){
>>>>>>> Chris
        let existingShiftEmployee = this.employeeList; /*.filter((employee) => {
           return  employee.getShiftList().has(shift);
        });*/

        if(existingShiftEmployee.length === 0){
            return existingShiftEmployee;
        }

        let lowestComplexity = existingShiftEmployee.sort(function(a, b){

            return a.complexity - b.complexity;

        })[0].complexity;

        let filterdComplexity = existingShiftEmployee.filter(function(employee) {return employee.complexity === lowestComplexity});

        return filterdComplexity;
    }

<<<<<<< HEAD
=======

>>>>>>> Chris
}