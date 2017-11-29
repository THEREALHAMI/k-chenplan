var Shift = (function () {
    function Shift(name, day, from, to) {
        this.name = '';
        this.day = null;
        this.timeSpan = {
            from: 0,
            to: 0
        };
        this.name = name;
        this.day = day;
        this.timeSpan.from = from;
        this.timeSpan.to = to;
    }
    Shift.prototype.get = function () {
    };
    return Shift;
}());
