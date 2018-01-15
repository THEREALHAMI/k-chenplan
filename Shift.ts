class Shift{
    private name: string = '';
    private day: number = null;
    private timeSpan = {
        from: 0,
        to: 0
    };
    private id: number = null ;
    private shiftType : string = '';

    constructor(name, day, from, to, id, shiftType){
        this.name = name;
        this.day = day;
        this.timeSpan.from = from;
        this.timeSpan.to = to;
        this.id = id;
        this.shiftType = shiftType;

    }

    public get(){

    }
    public getName(){
        return this.name;
    }
    public getTimeSpan(){
        return this.timeSpan;
    }

}