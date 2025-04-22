interface Point{
    x: number;
    y: number;
}

let drawPoint = (point: Point) => {
    // do something with point
    console.log(`X: ${point.x}, Y: ${point.y}`);
};

drawPoint({ x: 10, y: 20 });
drawPoint({ x: 30, y: 40 });