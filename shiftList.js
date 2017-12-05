var ShiftList = (function () {
    function ShiftList() {
        this.shiftList = [];
    }
    ShiftList.prototype.addShift = function (shift) {
        this.shiftList.push(shift);
    };
    ShiftList.prototype.get = function () {
        return this.shiftList;
    };
    ShiftList.prototype.has = function (shift) {
        if (this.shiftList.length == 0) {
            return false;
        }
        for (var i = 0; i < this.shiftList.length; i++) {
            if (this.shiftList[i].name === shift.getName()) {
                if (this.shiftList[i].timeSpan.from >= shift.getTimeSpan().from && this.shiftList[i].timeSpan.to <= shift.getTimeSpan().to) {
                    return true;
                }
            }
        }
        return false;
    };
    ShiftList.prototype.filterTimeSpan = function (from, to) {
    };
    return ShiftList;
}());
/*
  if(JSON.stringify(shift) === JSON.stringify(this.shiftList[i])){
sshift.getTimeSpan().to

                return true;
            }*/ 
