class Task{
    private name:string;
    private complexity:number;
    private floor:number;
    private id:number;
    private shiftList : Array<Shift> = [];


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


    public addShift(shift: Shift){
        this.shiftList.push(shift);
    }
    public getShiftList(){
        return this.shiftList;
    }

}


