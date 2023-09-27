var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var createAnimal = function (name, info, generateAnimal) {
    return __assign({ name: name }, generateAnimal(info));
};
var createCat = function (_a) {
    var legs = _a.legs, color = _a.color;
    return {
        legNumber: legs,
        color: color,
    };
};
var createFish = function (_a) {
    var toothNumber = _a.toothNumber, weight = _a.weight;
    return {
        toothNumber: toothNumber,
        weight: weight
    };
};
console.log(createAnimal('cat', { legs: 3, color: 'red' }, createCat));
console.log(createAnimal('fish', { toothNumber: 28, weight: 60 }, createFish));
