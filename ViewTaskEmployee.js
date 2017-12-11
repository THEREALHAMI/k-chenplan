var ViewTaskEmployee = /** @class */ (function () {
    function ViewTaskEmployee() {
    }
    ViewTaskEmployee.prototype.renderTaskEmployee = function (taskEmployee, tasks) {
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
            tableArray += "<tr><td>" + dayArray[i] + "</td></tr>";
        }
        ;
        document.getElementById("taskEmployeeList").innerHTML = tableArray;
    };
    return ViewTaskEmployee;
}());
