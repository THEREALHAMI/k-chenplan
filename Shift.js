var Shift = /** @class */ (function () {
    function Shift(name, day, from, to, id, shiftTableType) {
        this.name = '';
        this.day = null;
        this.timeSpan = {
            from: 0,
            to: 0
        };
        this.id = null;
        this.shiftTableType = '';
        this.name = name;
        this.day = day;
        this.timeSpan.from = from;
        this.timeSpan.to = to;
        this.id = id;
        this.shiftTableType = shiftTableType;
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
