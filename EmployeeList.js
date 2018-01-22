var EmployeeList = (function () {
    function EmployeeList() {
        this.employeeList = [];
        this.adapter = new AjaxAdapter();
    }
    EmployeeList.prototype.addEmployee = function (employee) {
        this.employeeList.push(employee);
    };
    EmployeeList.prototype.getEmployeesFromDatabank = function () {
        var _this = this;
        this.adapter.get("http://localhost:3000/api/Employees", function (data) {
            if (data)
                _this.employeeListObj = data;
            _this.createNewEmployee(_this.employeeListObj);
        });
    };
    EmployeeList.prototype.createNewEmployee = function (data) {
        var _this = this;
        data.forEach(function (elment) {
            var employee = new Employee(elment.firstname, elment.lastname, elment.floor, elment.complexity, elment.id);
            _this.addEmployee(employee);
        });
    };
    EmployeeList.prototype.pushShiftsToEmployee = function (shiftList) {
        var shifts = this.filterEmployeeShiftsFromShiftList(shiftList);
        this.employeeList.forEach(function (element) {
            element.addShiftList(shifts);
        });
    };
    EmployeeList.prototype.filterEmployeeShiftsFromShiftList = function (shiftList) {
        var employeeShifts = shiftList.get().filter(function (data) {
            return (data.getShiftType() === "Employee");
        });
        return employeeShifts;
    };
    EmployeeList.prototype.get = function () {
        return this.employeeList;
    };
    EmployeeList.prototype.getLowComplexityShift = function (shift) {
        var existingShiftEmployee = this.employeeList; /*.filter((employee) => {
           return  employee.getShiftList().has(shift);
        }); */
        if (existingShiftEmployee.length === 0) {
            return existingShiftEmployee;
        }
        var lowestComplexity = existingShiftEmployee.sort(function (a, b) {
            return a.complexity - b.complexity;
        })[0].complexity;
        var filterdComplexity = existingShiftEmployee.filter(function (employee) { return employee.complexity === lowestComplexity; });
        return filterdComplexity;
    };
    return EmployeeList;
}());
