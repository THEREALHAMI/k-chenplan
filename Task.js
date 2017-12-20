var Task = /** @class */ (function () {
    function Task(name, complexity, floor) {
        this.name = '';
        this.complexity = 0;
        this.shiftList = new ShiftList();
        this.name = name;
        this.complexity = complexity;
        this.floor = floor;
    }
    Task.prototype.addcomplexity = function () {
    };
    Task.prototype.getShiftList = function () {
        return this.shiftList;
    };
    Task.prototype.addShift = function (shift) {
        this.shiftList.addShift(shift);
    };
    Task.prototype.getComplexity = function () {
        return this.complexity;
    };
    return Task;
}());
