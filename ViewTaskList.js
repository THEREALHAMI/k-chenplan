var ViewTaskList = (function () {
    function ViewTaskList() {
        this.adapter = new AjaxAdapter();
        this.help = new Helper();
    }
    ViewTaskList.prototype.renderTaskList = function (tasks) {
        var tableArray = "";
        var objectProperty = Object.getOwnPropertyNames(tasks.get()[1]);
        console.log(objectProperty);
        for (var i = 0; i < objectProperty.length; i++) {
            tableArray += "<th>" + objectProperty[i] + "</th>";
        }
        for (var i = 0; i < tasks.get().length; i++) {
            tableArray += "<tr><td>" + tasks.get()[i].getName() + "</td>" +
                "<td>" + tasks.get()[i].getComplexity() + "</td>" +
                "<td>" + tasks.get()[i].getFloor() + "</td>" +
                "<td>" + tasks.get()[i].getId() + "</td></tr>";
        }
        return document.getElementById("taskList").innerHTML = tableArray;
    };
    ViewTaskList.prototype.addTask = function (task) {
        var _this = this;
        //let id = this.randomIdGenerator();
        var taskName = document.forms.addTask.name.value; // document.getElementsByName("vorname")[0].value;
        var taskComplexity = document.forms.addTask.complexity.value;
        var taskFloor = document.forms.addTask.floor.value;
        var taskFloorInt = parseInt(taskFloor);
        task = new Task(taskName, taskComplexity, taskFloorInt, 0);
        var data = this.help.encodedToUrl(task);
        console.log(data);
        this.adapter.post("http://localhost:3000/api/Tasks", data, function (text) { _this.output(text); });
    };
    return ViewTaskList;
}());
