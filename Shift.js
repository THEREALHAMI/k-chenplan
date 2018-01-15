var Shift = (function () {
    function Shift(name, day, from, to, id, shiftType) {
        this.name = '';
        this.day = null;
        this.timeSpan = {
            from: 0,
            to: 0
        };
        this.id = null;
        this.shiftType = '';
        this.name = name;
        this.day = day;
        this.timeSpan.from = from;
        this.timeSpan.to = to;
        this.id = id;
        this.shiftType = shiftType;
    }
    Shift.prototype.get = function () {
    };
    Shift.prototype.getName = function () {
        return this.name;
    };
    Shift.prototype.getTimeSpan = function () {
        return this.timeSpan;
    };
    return Shift;
}());
