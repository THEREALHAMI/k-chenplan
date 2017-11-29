var Employee = (function () {
    function Employee(name, complexity, floor) {
        this.id = 0;
        this.name = '';
        this.complexity = 0;
        this.floor = "";
        this.shiftList = new ShiftList();
        this.name = name;
        this.complexity = complexity;
        this.floor = floor;
        this.shiftList.get();
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getShiftList = function () {
        return this.shiftList;
    };
    /* public setName(name) {
         this.name = name;
     }*/
    Employee.prototype.addComplexity = function (complexity) {
        return this.complexity += complexity;
    };
    Employee.prototype.addEmployees = function () {
    };
    return Employee;
}());
