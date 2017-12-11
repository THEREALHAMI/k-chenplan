class Employee {
    private id = 0;
    private firstname='';
    private lastname = '';
    private complexity = 0;
    private floor="";
    private shiftList = new ShiftList();

    constructor(id, firstname, lastname, floor) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.floor = floor;
        this.shiftList.get();
    }
    public getId(){
        return this.id;
    }
    public getLastName() {
        return this.lastname;
    }
    public getFirstName(){
        return this.firstname;
    }
    public getComplexity(){
        return this.complexity;
    }
    public getFloor(){
        return this.floor;
    }

    public getShiftList(){
        return this.shiftList;
    }

   /* public setName(name) {
        this.name = name;
    }*/

    public addComplexity(complexity) {
        return this.complexity += complexity;
    }

    public addEmployees(){

    }

}