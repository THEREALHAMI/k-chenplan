var ViewTaskList = (function () {
    function ViewTaskList() {
        this.adapter = new AjaxAdapter();
        this.help = new Helper();
    }
    ViewTaskList.prototype.renderTaskList = function (tasks) {
        var tableArray = "";
        var objectProperty = ["Name", "Complexity", "Floor", "ID", "Shift List"];
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
    ViewTaskList.prototype.output = function (text) {
        console.log(text);
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
    ViewTaskList.prototype.deleteTask = function () {
        var _this = this;
        var taskId = document.forms.deleteTask.taskId.value;
        this.adapter.delete("http://localhost:3000/api/Tasks/" + taskId, function (text) { _this.output(text); });
    };
    ViewTaskList.prototype.changeTask = function () {
        var _this = this;
        var data = {
            "name": document.forms.changeTask.name.value,
            "complexity": document.forms.changeTask.complexity.value,
            "floor": document.forms.changeTask.floor.value,
            "id": document.forms.changeTask.id.value
        };
        console.log(data);
        var urlData = this.help.encodedToUrl(data);
        this.adapter.put("http://localhost:3000/api/Tasks/", urlData, function (text) { _this.output(text); });
    };
    return ViewTaskList;
}());
