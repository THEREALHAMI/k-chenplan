var Employee = (function () {
    function Employee(firstname, lastname, floor, complexity, id) {
        this.firstname = '';
        this.lastname = '';
        this.complexity = 0;
        this.floor = "";
        this.id = 0;
        this.shiftList = new ShiftList();
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.floor = floor;
        this.complexity = complexity;
        this.shiftList.get();
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.getLastName = function () {
        return this.lastname;
    };
    Employee.prototype.getFirstName = function () {
        return this.firstname;
    };
    Employee.prototype.getComplexity = function () {
        return this.complexity;
    };
    Employee.prototype.getFloor = function () {
        return this.floor;
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
