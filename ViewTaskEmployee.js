var ViewTaskEmployee = (function () {
    function ViewTaskEmployee() {
        this.helper = new Helper();
        this.adapter = new AjaxAdapter();
    }
    ViewTaskEmployee.prototype.renderTaskEmployee = function (taskEmployee, tasks) {
        this.tasks = tasks.get();
        this.tasksEmployees = taskEmployee.get();
        var tableArray = "<th>Tage / Aufgaben </th>";
        tasks.get().forEach(function (taskArrayElement) {
            tableArray += "<th>" + taskArrayElement.name + "</th>";
        });
        var dayArray = [];
        for (var i = 0; i < taskEmployee.get().length; i++) {
            dayArray.push(taskEmployee.get()[i].shift.name);
        }
        dayArray = dayArray.filter(function (element, index, Array) {
            return Array.indexOf(element) == index;
        });
        for (var i = 0; i < dayArray.length; i++) {
            tableArray += "<tr><td>" + dayArray[i] + "</td>" + this.employeeName(dayArray[i]) + "</tr>";
        }
        document.getElementById("taskEmployeeList").innerHTML = tableArray;
    };
    ViewTaskEmployee.prototype.employeeName = function (day) {
        var _this = this;
        var name = "";
        this.tasks.forEach(function (task) {
            var taskEmployee = _this.tasksEmployees.find(function (taskEmployee) {
                if ((task.getName() === taskEmployee.task.getName()) && (day === taskEmployee.shift.getName())) {
                    return true;
                }
                return false;
            });
            if (taskEmployee !== undefined) {
                name += "<td>" + taskEmployee.employee.getFirstName() + "</td>";
                return;
            }
            name += "<td></td>";
        });
        return name;
    };
    ViewTaskEmployee.prototype.output = function (text) {
        console.log(text);
    };
    ViewTaskEmployee.prototype.saveEmployeeData = function (employeeList) {
        var _this = this;
        employeeList.get().forEach(function (employee) {
            var data = {
                "firstname": employee.getFirstName(),
                "lastname": employee.getLastName(),
                "complexity": employee.getComplexity(),
                "floor": employee.getFloor(),
                "id": employee.getId()
            };
            var urlData = _this.helper.encodedToUrl(data);
            _this.adapter.put("http://localhost:3000/api/Employees/", urlData, function (text) { _this.output(text); });
        });
    };
    return ViewTaskEmployee;
}());
