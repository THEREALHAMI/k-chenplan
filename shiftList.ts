
class ShiftList{
    private shiftList = [];
    private adapter = new AjaxAdapter();
    public shiftListObj;

    constructor(){
    }

    public getShifts(){
        this.adapter.get("http://localhost:3000/api/Shifts",(data)=>{
            if(data) this.shiftListObj = data;
            this.shiftFromDatabank(this.shiftListObj);
        });
    }

    public addShift(shift){
        this.shiftList.push(shift);
    }

    public shiftFromDatabank(data){
        data.forEach((element)=>{
            let shift = new Shift(element.name,element.day,element.from, element.to, element.id, element.shiftType);
            this.addShift(shift);
        });
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