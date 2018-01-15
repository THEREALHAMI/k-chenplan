class Shift{
    private name: string = '';
    private day: number = null;
    private timeSpan = {
        from: 0,
        to: 0
    };
    private id: number = null ;
    private shiftTableType : string = '';

    constructor(name, day, from, to, id, shiftTableType){
        this.name = name;
        this.day = day;
        this.timeSpan.from = from;
        this.timeSpan.to = to;
        this.id = id;
        this.shiftTableType = shiftTableType;

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