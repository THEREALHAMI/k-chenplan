var Task = (function () {
    function Task(name, complexity, floor, id) {
        this.shiftList = [];
        this.name = name;
        this.complexity = complexity;
        this.floor = floor;
        this.id = id;
    }
    Task.prototype.addcomplexity = function () {
    };
    Task.prototype.getName = function () {
        return this.name;
    };
    Task.prototype.getComplexity = function () {
        return this.complexity;
    };
    Task.prototype.getFloor = function () {
        return this.floor;
    };
    Task.prototype.getId = function () {
        return this.id;
    };
    Task.prototype.addShift = function (shift) {
        this.shiftList.push(shift);
    };
    Task.prototype.getShiftList = function () {
        return this.shiftList;
    };
    return Task;
}());
