class ViewTaskEmployee{
    constructor(){

    }

    public renderTaskEmployee(taskEmployee, tasks){
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
            tableArray += "<tr><td>" + dayArray[i] + "</td></tr>";
        };


        document.getElementById("taskEmployeeList").innerHTML= tableArray;
    }
}