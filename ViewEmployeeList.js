var ViewEmployeeList = /** @class */ (function () {
    function ViewEmployeeList() {
    }
    ViewEmployeeList.prototype.renderEmployeeList = function (employees) {
        var tableArray = "";
        var objectProperty = Object.getOwnPropertyNames(employees.get()[0]);
        for (var i = 0; i < objectProperty.length; i++) {
            tableArray += "<th>" + objectProperty[i] + "</th>";
        }
        for (var i = 0; i < employees.get().length; i++) {
            tableArray += "<tr><td>" + employees.get()[i].getId() + "</td>" +
                "<td>" + employees.get()[i].getFirstName() + "</td>" +
                "<td>" + employees.get()[i].getLastName() + "</td>" +
                "<td>" + employees.get()[i].getComplexity() + "</td><td>" + employees.get()[i].getFloor() + "</td></tr>";
        }
        return document.getElementById("employeeList").innerHTML = tableArray;
    };
    ViewEmployeeList.prototype.addEmployee = function (employees) {
        //let id = this.randomIdGenerator();
        var employeeFirstName = document.forms.addEmployee.vorname.value; // document.getElementsByName("vorname")[0].value;
        var employeeLastName = document.forms.addEmployee.nachname.value;
        var employeeFloor = document.forms.addEmployee.floor.value;
        var employeeFloorInt = parseInt(employeeFloor);
        var employee = new Employee(0, employeeFirstName, employeeLastName, employeeFloorInt);
        employees.addEmployee(employee);
    };
    return ViewEmployeeList;
}());
