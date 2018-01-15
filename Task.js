var Task = (function () {
    function Task(name, complexity, floor, id) {
        this.name = '';
        this.complexity = 0;
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
    Task.prototype.getShiftList = function () {
        return this.kitchenPlan.shiftList;
    };
    Task.prototype.addShift = function (shift) {
        this.kitchenPlan.shiftList.addShift(shift);
    };
    return Task;
}());
