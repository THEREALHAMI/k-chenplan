class Shift{
    private name: string = '';
    private day: number = null;
    private timeSpan = {
        from: 0,
        to: 0
    };
    constructor(name, day, from, to){
        this.name = name;
        this.day = day;
        this.timeSpan.from = from;
        this.timeSpan.to = to;

    }

    public get(){

    }
}