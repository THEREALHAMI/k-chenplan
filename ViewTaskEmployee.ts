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
            tableArray += `<tr><td>${dayArray[i]}</td>${this.employeeName(dayArray[i])}</tr>`;
        }


        document.getElementById("taskEmployeeList").innerHTML= tableArray;

    }

   private employeeName(day){
        let name = "";

       this.tasks.forEach((task) =>{
           let taskEmployee = this.tasksEmployees.find((taskEmployee) => {
               if((task.getName() === taskEmployee.task.getName()) && (day === taskEmployee.shift.getName())) {
                   return true;
               }
               return false;
           });

           if (taskEmployee !== undefined){
               name += `<td>${taskEmployee.employee.getFirstName()}</td>`;
               return;
           }

           name += "<td></td>";
       });

       return name;
    }
}