"use strict";
exports.__esModule = true;
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var circlObj = new circle_1.Circle(2);
circlObj.myarea();
circlObj.display();
var rectObj = new rectangle_1.Rectangle(2, 3);
rectObj.myarea();
rectObj.display();
