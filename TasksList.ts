class TasksList{
    private tasksList: Array<Task> = [];
    private adapter:AjaxAdapter = new AjaxAdapter();
    public taskListObj:Object;

    constructor() {
    }

    public getTaskFromDatabank(){
        this.adapter.get("http://localhost:3000/api/Tasks",(data)=>{
            if(data) this.taskListObj = data;
            this.createNewTask(this.taskListObj);
        });
    }

    private createNewTask(data) {
        data.forEach((elment)=>{
            let task = new Task(elment.name,elment.complexity,elment.floor,elment.id);
            this.addTask(task);
        });
    }

    public pushShiftsToTask(shiftList){
        let shifts = this.filterTaskShiftsFromShiftList(shiftList);

        this.tasksList.forEach((element)=>{
            shifts.forEach((shift)=>{
                if(element.getId()===shift.getShiftId()){
                    element.addShift(shift);
                }
            });
        });
    }

    private filterTaskShiftsFromShiftList(shiftList:ShiftList){
        let taskShifts = shiftList.get().filter(function(data){
            return(data.getShiftType() ==="Task");
        });
        return taskShifts;
    }

    public addTask(task){
        this.tasksList.push(task)
    }

    public get(): Array<Task>{
        return this.tasksList;
    }

}
