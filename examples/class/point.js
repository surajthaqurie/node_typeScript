"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    // private x: number;    // Access modifires      // Inline Annotation
    // y: number;          // Inline Annotation
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        //..
        console.log('X:' + this._x + ',Y: ' + this._y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
