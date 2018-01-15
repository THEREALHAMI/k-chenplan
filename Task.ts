class Task{
    private name ='';
    private complexity = 0;
    private floor;
    private id;
    private shifts = new ShiftList().shiftListObj;


    constructor(name,complexity, floor, id){
        this.name = name;
        this.complexity = complexity;
        this.floor = floor;
        this.id = id;

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
        return this.kitchenPlan.shiftList;
    }

    public addShift(shift: Shift){
        this.kitchenPlan.shiftList.addShift(shift);
    }
}


