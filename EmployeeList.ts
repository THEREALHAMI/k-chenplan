class EmployeesList {
    private employeeList = [];


    constructor() {

    }

    public addEmployee(employee) {
        this.employeeList.push(employee);
    }
    public get(): Array<Employee>{
        return this.employeeList;
    }
    public compareTimeSpan(from, to){

    }
    public getLowComplexityShift(shift:Shift){

        let existingShiftEmployee = this.employeeList.filter((employee) => {

            return employee.getShiftList().has(shift)

        });

        let lowestComplexity = existingShiftEmployee.sort(function(a, b){

            return a.complexity - b.complexity;

        })[0].complexity;

        let filterdComplexity = existingShiftEmployee.filter(function(employee) {return employee.complexity === lowestComplexity});
        return filterdComplexity;
    }

    public loadEmployeesList(){

    }

}