interface taskEmployee{

    shift:Shift;
    task: Task;
    employee: Employee;

}

class ViewTaskEmployee{
    private tasks: Array<Task>;
    private tasksEmployees : Array<taskEmployee>;
    constructor(){

    }

    public renderTaskEmployee(taskEmployee, tasks){
        this.tasks = tasks.get();
        this.tasksEmployees = taskEmployee.get();

        let tableArray="<th>Tage / Aufgaben </th>";

        tasks.get().forEach((taskArrayElement)=>{
            tableArray +="<th>"+taskArrayElement.name+"</th>";
        });



        let dayArray =[];

        for(let i=0; i < taskEmployee.get().length;i++ ){
            dayArray.push(taskEmployee.get()[i].shift.name);
        }

        dayArray= dayArray.filter( function( name, index, Array ) {
            return Array.indexOf(name) == index;
        });


        for(let i =0; i <dayArray.length; i++){
            tableArray += `<tr><td> ${dayArray[i]}</td>${this.employeeName(dayArray[i])}</tr>`;
        };


        document.getElementById("taskEmployeeList").innerHTML= tableArray;
    }

    private employeeName(day){
        var name = "" ;

        this.tasksEmployees.forEach((taskEmployee)=>{
            this.tasks.forEach((task) =>{
                if( (task.name === taskEmployee.task.name) && (taskEmployee.shift.getName() === day)) {
                    name +=`<td>${taskEmployee.employee.firstname}</td>`;
                }
            });
        });

        return name;
    }
}