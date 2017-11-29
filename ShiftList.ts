
class ShiftList{
    private shiftList = [];

    constructor(){

    }

    public addShift(shift){
        this.shiftList.push(shift);
    }

    public get(){
        return this.shiftList;
    }
    public has(shift: Shift){
        if(shift){
            return true
        }else {
            return false;
        }
    }
    public filterTimeSpan(from, to){

    }
}