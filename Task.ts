class Task{
    private id;
    private name ='';
    private complexity = 0;
    private floor;
    private shiftList: ShiftList = new ShiftList();

    constructor(name,complexity, floor){
        this.name = name;
        this.complexity = complexity;
        this.floor = floor;

    }
    public addcomplexity(){

    }

    public getShiftList(){
        return this.shiftList;
    }

    public addShift(shift: Shift){
        this.shiftList.addShift(shift);
    }

    public getComplexity(){
        return this.complexity;
    }

}


