class Employee {
    private id = 0;
    private name = '';
    private complexity = 0;
    private floor="";
    private shiftList = new ShiftList();


    constructor(name, complexity, floor) {

        this.name = name;
        this.complexity = complexity;
        this.floor = floor;
        this.shiftList.get();
    }

    public getName() {
        return this.name;
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