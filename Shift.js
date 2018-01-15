var Shift = /** @class */ (function () {
    function Shift(name, day, from, to, id, shiftType, shiftId) {
        this.name = '';
        this.day = null;
        this.timeSpan = {
            from: 0,
            to: 0
        };
        this.id = null;
        this.shiftType = '';
        this.shiftId = null;
        this.name = name;
        this.day = day;
        this.timeSpan.from = from;
        this.timeSpan.to = to;
        this.id = id;
        this.shiftType = shiftType;
        this.shiftId = shiftId;
    }
    Shift.prototype.get = function () {
    };
    Shift.prototype.getName = function () {
        return this.name;
    };
    Shift.prototype.getTimeSpan = function () {
        return this.timeSpan;
    };
    Shift.prototype.getShiftType = function () {
        return this.shiftType;
    };
    Shift.prototype.getShiftId = function () {
        return this.shiftId;
    };
    return Shift;
}());
