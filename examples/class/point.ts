export class Point {
    // private x: number;    // Access modifires      // Inline Annotation
    // y: number;          // Inline Annotation

    constructor(private _x?: number, private _y?: number) {    // Access modifires  // optionals value == ?
        // this.x = x;
        // this.y = y;
    }

    draw() {
        //..
        console.log('X:' + this._x + ',Y: ' + this._y);
    }
    getDistance(another: Point) {
        //...
    }
    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');

        this._x = value;

    }
}