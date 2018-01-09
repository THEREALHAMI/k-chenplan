class ViewTaskList {
    private adapter = new AjaxAdapter();
    private help = new Helper();

    constructor() {
    }


    public renderTaskList(tasks: TasksList) {
        let tableArray = "";
        let objectProperty = Object.getOwnPropertyNames(tasks.get()[1]);
        console.log(objectProperty);

        for (let i = 0; i < objectProperty.length; i++) {
            tableArray += "<th>" + objectProperty[i] + "</th>";
        }
        for (let i = 0; i < tasks.get().length; i++) {

            tableArray += "<tr><td>" + tasks.get()[i].getName() + "</td>" +
                "<td>" + tasks.get()[i].getComplexity()+ "</td>" +
                "<td>" + tasks.get()[i].getFloor() + "</td>"+
                "<td>" + tasks.get()[i].getId() + "</td></tr>";
        }
        return document.getElementById("taskList").innerHTML = tableArray;

    }

    public addTask(task){
        //let id = this.randomIdGenerator();
        let taskName = document.forms.addTask.name.value;// document.getElementsByName("vorname")[0].value;
        let taskComplexity = document.forms.addTask.complexity.value ;
        let taskFloor= document.forms.addTask.floor.value;
        let taskFloorInt = parseInt(taskFloor);
        task = new Task(taskName,taskComplexity,taskFloorInt,0);


        let data = this.help.encodedToUrl(task);
        console.log(data);

        this.adapter.post("http://localhost:3000/api/Tasks",  data,(text)=>{this.output(text)});

    }
}