var ViewTaskEmployee = (function () {
    function ViewTaskEmployee() {
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
        dayArray = dayArray.filter(function (name, index, Array) {
            return Array.indexOf(name) == index;
        });
        for (var i = 0; i < dayArray.length; i++) {
            tableArray += "<tr><td> " + dayArray[i] + "</td>" + this.employeeName(dayArray[i]) + "</tr>";
        }
        ;
        document.getElementById("taskEmployeeList").innerHTML = tableArray;
    };
    ViewTaskEmployee.prototype.employeeName = function (day) {
        var _this = this;
        var name = "";
        this.tasksEmployees.forEach(function (taskEmployee) {
            _this.tasks.forEach(function (task) {
                if ((task.name === taskEmployee.task.name) && (taskEmployee.shift.getName() === day)) {
                    name += "<td>" + taskEmployee.employee.firstname + "</td>";
                }
            });
        });
        return name;
    };
    return ViewTaskEmployee;
}());
