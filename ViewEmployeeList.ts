class ViewEmployeeList{
    constructor(){

    }


    public renderEmployeeList(employees){
        let tableArray="";

        var objectProperty = Object.getOwnPropertyNames(employees.get()[0]);

        for(let i =0; i < objectProperty.length; i++){
            tableArray+="<th>"+objectProperty[i]+"</th>";
        }
        for(let i=0; i < employees.get().length; i++){

            tableArray+="<tr><td>" + employees.get()[i].getId() + "</td>" +
                "<td>" + employees.get()[i].getFirstName() + "</td>"+
                "<td>" + employees.get()[i].getLastName() + "</td>" +
                "<td>" + employees.get()[i].getComplexity()+ "</td><td>" +employees.get()[i].getFloor() + "</td></tr>";
        }
        return document.getElementById("employeeList").innerHTML = tableArray;

    }
    public addEmployee(employees){
        //let id = this.randomIdGenerator();
        let employeeFirstName = document.forms.addEmployee.vorname.value// document.getElementsByName("vorname")[0].value;
        let employeeLastName = document.forms.addEmployee.nachname.value ;
        let employeeFloor= document.forms.addEmployee.floor.value;
        let employeeFloorInt = parseInt(employeeFloor);
        let employee = new Employee(0,employeeFirstName,employeeLastName,employeeFloorInt);
        employees.addEmployee(employee)

    }
}