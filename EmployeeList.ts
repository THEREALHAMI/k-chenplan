 class EmployeeList {
    private employeeList : Array<Employee> = [];
    private adapter = new AjaxAdapter();
    public employeeListObj;
    constructor() {
    }

    public addEmployee(employee){
        this.employeeList.push(employee);
    }
    public getEmployees(){
        this.adapter.get("http://localhost:3000/api/Employees",(data)=>{
            if(data) this.employeeListObj = data;
            this.employeeFromDatabank(this.employeeListObj);
        });
    }

    private employeeFromDatabank(data) {
          data.forEach((elment)=>{
          let employee = new Employee(elment.firstname,elment.lastname, elment.floor,elment.complexity , elment.id);
            this.addEmployee(employee);
        });
    }
    public pushShiftsToEmployee(shiftList){
        let shifts = this.filterEmployeeShiftsFromShiftList(shiftList)
        this.employeeList.forEach((element)=>{
            element.addShiftList(shifts);
        })
    }
     private filterEmployeeShiftsFromShiftList(shiftList:ShiftList){
        let employeeShifts = shiftList.get().filter(function(data){
            return(data.getShiftType() ==="Employee");
        });
        return employeeShifts;
     }


    public get(): Array<Employee>{
        return this.employeeList;
    }


    public getLowComplexityShift(shift:Shift){
        let existingShiftEmployee =  this.employeeList /*.filter((employee) => {
           return  employee.getShiftList().has(shift);
        }); */

        if(existingShiftEmployee.length === 0){
            return existingShiftEmployee;
        }

        let lowestComplexity = existingShiftEmployee.sort(function(a, b){

            return a.complexity - b.complexity;

        })[0].complexity;

        let filterdComplexity = existingShiftEmployee.filter(function(employee) {return employee.complexity === lowestComplexity});

        return filterdComplexity;
    }


}