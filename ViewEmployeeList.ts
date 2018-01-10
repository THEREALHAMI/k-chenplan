class ViewEmployeeList{
    private adapter = new AjaxAdapter();
    private help = new Helper();
    constructor(){
    }


    public renderEmployeeList(employees){
        let tableArray="";

<<<<<<< HEAD
        var objectProperty = Object.getOwnPropertyNames(employees.get()[1]);
=======
        let objectProperty = ["First Name","Last Name","Complexity","Floor","ID","Shift List"];
>>>>>>> Chris

        for(let i =0; i < objectProperty.length; i++){
            tableArray+="<th>"+objectProperty[i]+"</th>";
        }
        for(let i=0; i < employees.get().length; i++){

            tableArray+="<tr><td>" + employees.get()[i].getFirstName() + "</td>"+
                "<td>" + employees.get()[i].getLastName() + "</td>" +
<<<<<<< HEAD
                "<td>" + employees.get()[i].getComplexity()+ "</td><td>" +employees.get()[i].getFloor() +"</td><td>" + employees.get()[i].getId() +"</td></tr>";
=======
                "<td>" + employees.get()[i].getComplexity()+ "</td>"+
                "<td>" +employees.get()[i].getFloor() +"</td>"+
                "<td>" + employees.get()[i].getId() +"</td></tr>";
>>>>>>> Chris
        }
        return document.getElementById("employeeList").innerHTML = tableArray;

    }


    public addEmployee(employee){
        //let id = this.randomIdGenerator();
        let employeeFirstName = document.forms.addEmployee.vorname.value;// document.getElementsByName("vorname")[0].value;
        let employeeLastName = document.forms.addEmployee.nachname.value ;
        let employeeFloor= document.forms.addEmployee.floor.value;
        let employeeFloorInt = parseInt(employeeFloor);
        employee = new Employee(employeeFirstName,employeeLastName,employeeFloorInt,0);

      let data = this.help.encodedToUrl(employee);

<<<<<<< HEAD

=======
    console.log(data);
>>>>>>> Chris
        this.adapter.post("http://localhost:3000/api/Employees",  data,(text)=>{this.output(text)});

    }

    private output(text){
        console.log(text);
    }

    public deleteEmployee(){
        let employeeId = document.forms.deleteEmployee.EmployeeId.value;
        this.adapter.delete("http://localhost:3000/api/Employees/"+employeeId,(text)=>{this.output(text)})
<<<<<<< HEAD

=======
>>>>>>> Chris
    }

    public changeEmployee(){
        let data = {
            "firstname" :document.forms.changeEmployee.vorname.value,
            "lastname":  document.forms.changeEmployee.nachname.value ,
            "complexity": 0,
            "floor": document.forms.changeEmployee.floor.value,
            "id": document.forms.changeEmployee.id.value
        };
<<<<<<< HEAD
            let urlData = this.help.encodedToUrl(data);
=======
        let urlData = this.help.encodedToUrl(data);
>>>>>>> Chris
        this.adapter.put("http://localhost:3000/api/Employees/",urlData,(text)=>{this.output(text)})
    }


}