 class Employee {
    private firstname:string;
    private lastname:string;
    private complexity:number;
    private floor:number;
    private id:number;
    private shiftList : Array<Shift> = [];

    constructor(firstname, lastname, floor, complexity,id) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.floor = floor;
        this.complexity = complexity;
        //this.shiftList);
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
    public addShiftList(shiftList){
        this.shiftList  = shiftList;
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