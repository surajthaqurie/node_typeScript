
import { Point } from './point';

let point = new Point(1, 2);
// point.x = 1;
// point.y = 2;
let x = point.x;
point.x = 10;
point.draw();