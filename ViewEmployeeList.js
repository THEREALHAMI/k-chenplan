var ViewEmployeeList = (function () {
    function ViewEmployeeList() {
        this.adapter = new AjaxAdapter();
        this.help = new Helper();
    }
    ViewEmployeeList.prototype.renderEmployeeList = function (employees) {
        var tableArray = "";
        var objectProperty = ["First Name", "Last Name", "Complexity", "Floor", "ID", "Shift List"];
        for (var i = 0; i < objectProperty.length; i++) {
            tableArray += "<th>" + objectProperty[i] + "</th>";
        }
        for (var i = 0; i < employees.get().length; i++) {
            tableArray += "<tr><td>" + employees.get()[i].getFirstName() + "</td>" +
                "<td>" + employees.get()[i].getLastName() + "</td>" +
                "<td>" + employees.get()[i].getComplexity() + "</td>" +
                "<td>" + employees.get()[i].getFloor() + "</td>" +
                "<td>" + employees.get()[i].getId() + "</td></tr>";
        }
        return document.getElementById("employeeList").innerHTML = tableArray;
    };
    ViewEmployeeList.prototype.addEmployee = function (employee) {
        var _this = this;
        //let id = this.randomIdGenerator();
        var employeeFirstName = document.forms.addEmployee.vorname.value; // document.getElementsByName("vorname")[0].value;
        var employeeLastName = document.forms.addEmployee.nachname.value;
        var employeeFloor = document.forms.addEmployee.floor.value;
        var employeeFloorInt = parseInt(employeeFloor);
        employee = new Employee(employeeFirstName, employeeLastName, employeeFloorInt, 0, null);
        var data = this.help.encodedToUrl(employee);
        console.log(data);
        this.adapter.post("http://localhost:3000/api/Employees", data, function (text) { _this.output(text); });
    };
    ViewEmployeeList.prototype.output = function (text) {
        console.log(text);
    };
    ViewEmployeeList.prototype.deleteEmployee = function (employeeId) {
        var _this = this;
        this.adapter.delete("http://localhost:3000/api/Employees/" + employeeId, function (text) { _this.output(text); });
    };
    ViewEmployeeList.prototype.changeEmployee = function () {
        var _this = this;
        var data = {
            "firstname": document.forms.changeEmployee.vorname.value,
            "lastname": document.forms.changeEmployee.nachname.value,
            "complexity": 0,
            "floor": document.forms.changeEmployee.floor.value,
            "id": document.forms.changeEmployee.id.value
        };
        var urlData = this.help.encodedToUrl(data);
        this.adapter.put("http://localhost:3000/api/Employees/", urlData, function (text) { _this.output(text); });
    };
    return ViewEmployeeList;
}());
