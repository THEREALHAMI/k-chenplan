
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
        if(this.shiftList.length == 0){
            return false;
        }

        for(let i= 0; i < this.shiftList.length; i++){
            if(this.shiftList[i].name === shift.getName()){
                if(this.shiftList[i].timeSpan.from >= shift.getTimeSpan().from  && this.shiftList[i].timeSpan.to <= shift.getTimeSpan().to ){
                    return true;
                }
            }
        }

        return false;

    }
    public filterTimeSpan(from, to){

    }
}

/*
  if(JSON.stringify(shift) === JSON.stringify(this.shiftList[i])){
sshift.getTimeSpan().to

                return true;
            }*/