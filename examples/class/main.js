"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
// point.x = 1;
// point.y = 2;
var x = point.x;
point.x = 10;
point.draw();
