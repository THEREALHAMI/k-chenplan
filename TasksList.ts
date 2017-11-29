class TasksList{
    private tasksList: Array<Task> = [];

   constructor(){

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
