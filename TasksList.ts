class TasksList{
    private tasksList: Array<Task> = [];
    private adapter = new AjaxAdapter();

    constructor() {
        //this.adapter.get("http://localhost:3000/api/Tasks",(data)=>{this.taskFromDatabank(data)});
    }

    private taskFromDatabank(data)
    {

        data.forEach((elment)=>{
            let task = new Task(elment.name,elment.complexity,elment.floor,elment.id);
            this.addTask(task);
        });
    }

    public addTask(task){
        this.tasksList.push(task)
    }

    public get(): Array<Task>{
        return this.tasksList;
    }

    public loadTasksList(){

    }
    public saveTasksList(){
    }


}
