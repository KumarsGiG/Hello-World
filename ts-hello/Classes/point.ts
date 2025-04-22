export class Point{

    constructor(private _x: number, private _y: number) {
        // constructor body
    }

    drawPoint() {
        // do something with point
        console.log(`X: ${this._x}, Y: ${this._y}`);
    }

    get x() : number {
        return this._x;
    }

    set x(value : number){
        if (value < 0) throw new Error('Value cannot be less than 0');

        this._x = value;
    }
}

let point = new Point(10, 20);