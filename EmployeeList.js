var EmployeesList = (function () {
    function EmployeesList() {
        this.employeeList = [];
    }
    EmployeesList.prototype.addEmployee = function (employee) {
        this.employeeList.push(employee);
    };
    EmployeesList.prototype.get = function () {
        return this.employeeList;
    };
    EmployeesList.prototype.compareTimeSpan = function (from, to) {
    };
    EmployeesList.prototype.getLowComplexityShift = function (shift) {
        var existingShiftEmployee = this.employeeList.filter(function (employee) {
            return employee.getShiftList().has(shift);
        });
        var lowestComplexity = existingShiftEmployee.sort(function (a, b) {
            return a.complexity - b.complexity;
        })[0].complexity;
        var filterdComplexity = existingShiftEmployee.filter(function (employee) { return employee.complexity === lowestComplexity; });
        return filterdComplexity;
    };
    EmployeesList.prototype.loadEmployeesList = function () {
    };
    return EmployeesList;
}());
