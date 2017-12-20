class EmployeesList {
    private employeeList : Array<Employee> = [];
    private adapter = new AjaxAdapter();

    constructor() {
        this.adapter.get("http://localhost:3000/api/Employees",this.test);

        console.log(this.employeeList);
    }
    public addEmployee(employee){
        this.employeeList.push(employee);
    }

    public test(data)
    {
        let employeeApi = data;



        employeeApi.forEach((elment)=>{
          let employee =  new Employee(elment.firstname,elment.lastname,elment.complexity , elment.floor, elment.id);
            this.employeeList.push(employee);
        });

    }




    public get(): Array<Employee>{
        return this.employeeList;
    }



    public compareTimeSpan(from, to){

    }
    public getLowComplexityShift(shift:Shift){

        let existingShiftEmployee = this.employeeList.filter((employee) => {
           return employee.getShiftList().has(shift);
        });

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