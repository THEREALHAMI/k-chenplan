class ViewTaskList {
    private adapter = new AjaxAdapter();
    private help = new Helper();

    constructor() {
    }


    public renderTaskList(taskList: TasksList) {
        let tableArray = "";
        let objectProperty = ["Name","Complexity","Floor","ID","Shift List"];

        for (let i = 0; i < objectProperty.length; i++) {
            tableArray += "<th>" + objectProperty[i] + "</th>";
        }
        for (let i = 0; i < taskList.get().length; i++) {

            tableArray += "<tr><td>" + taskList.get()[i].getName() + "</td>" +
                "<td>" + taskList.get()[i].getComplexity()+ "</td>" +
                "<td>" + taskList.get()[i].getFloor() + "</td>"+
                "<td>" + taskList.get()[i].getId() + "</td></tr>";
        }
        return document.getElementById("taskList").innerHTML = tableArray;

    }
    private output(text){
        console.log(text);
    }

    public addTask(task){
        //let id = this.randomIdGenerator();
        let taskName = document.forms.addTask.name.value;// document.getElementsByName("vorname")[0].value;
        let taskComplexity = document.forms.addTask.complexity.value ;
        let taskFloor= document.forms.addTask.floor.value;
        let taskFloorInt = parseInt(taskFloor);
        task = new Task(taskName,taskComplexity,taskFloorInt,null);


        let data = this.help.encodedToUrl(task);
        console.log(data);

        this.adapter.post("http://localhost:3000/api/Tasks",  data,(text)=>{this.output(text)});

    }

    public deleteTask(){
        let taskId = document.forms.deleteTask.taskId.value;
        this.adapter.delete("http://localhost:3000/api/Tasks/"+taskId,(text)=>{this.output(text)})
    }

    public changeTask(){
        let data = {
            "name" :document.forms.changeTask.name.value,
            "complexity": document.forms.changeTask.complexity.value,
            "floor": document.forms.changeTask.floor.value,
            "id": document.forms.changeTask.id.value
        };
        console.log(data);
        let urlData = this.help.encodedToUrl(data);
        this.adapter.put("http://localhost:3000/api/Tasks/",urlData,(text)=>{this.output(text)})
    }
}