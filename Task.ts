class Task{
    private name ='';
    private complexity = 0;
    private floor;
    private id;
    private shiftList: ShiftList = new ShiftList();

    constructor(name,complexity, floor, id){
        this.name = name;
        this.complexity = complexity;
        this.floor = floor;
        this.id = id;
        this.shiftList.get();

    }
    public addcomplexity(){

    }

    public getName(){
        return this.name;
    }
    public getComplexity(){
        return this.complexity;
    }
    public getFloor(){
        return this.floor;
    }
    public getId(){
        return this.id;
    }
    public getShiftList(){
        return this.shiftList;
    }

    public addShift(shift: Shift){
        this.shiftList.addShift(shift);
    }


}


