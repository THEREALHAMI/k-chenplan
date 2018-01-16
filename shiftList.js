var ShiftList = (function () {
    function ShiftList() {
        this.shiftList = [];
        this.adapter = new AjaxAdapter();
    }
    ShiftList.prototype.getShifts = function () {
        var _this = this;
        this.adapter.get("http://localhost:3000/api/Shifts", function (data) {
            if (data)
                _this.shiftListObj = data;
            _this.shiftFromDatabank(_this.shiftListObj);
        });
    };
    ShiftList.prototype.addShift = function (shift) {
        this.shiftList.push(shift);
    };
    ShiftList.prototype.shiftFromDatabank = function (data) {
        var _this = this;
        data.forEach(function (element) {
            var shift = new Shift(element.name, element.day, element.from, element.to, element.id, element.shiftType, element.shiftId);
            _this.addShift(shift);
        });
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
