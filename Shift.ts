class Shift{
    private name: string = '';
    private day: number = null;
    private timeSpan = {
        from: 0,
        to: 0
    };
    private id: number = null ;
    private shiftType : string = '';
    private shiftId: number= null;

    constructor(name, day, from, to, id, shiftType, shiftId){
        this.name = name;
        this.day = day;
        this.timeSpan.from = from;
        this.timeSpan.to = to;
        this.id = id;
        this.shiftType = shiftType;
        this.shiftId = shiftId;

    }

    public get(){

    }
    public getName(){
        return this.name;
    }
    public getTimeSpan(){
        return this.timeSpan;
    }
    public getShiftType(){
        return this.shiftType;
    }
    public getShiftId() {
        return this.shiftId;
    }
}

