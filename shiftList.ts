
class ShiftList{
    private shiftList:Array<Shift> = [];
    private adapter:AjaxAdapter = new AjaxAdapter();
    public shiftListObj:Object;

    constructor(){
    }

    public getShiftsFromDatabank(){
        this.adapter.get("http://localhost:3000/api/Shifts",(data)=>{
            if(data) this.shiftListObj = data;
            this.createNewShifts(this.shiftListObj);
        });
    }

    public addShift(shift){
        this.shiftList.push(shift);
    }

    public createNewShifts(data){
        data.forEach((element)=>{
            let shift = new Shift(element.name,element.day,element.from, element.to, element.id, element.shiftType, element.shiftId);
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
}
