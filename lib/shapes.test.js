const {Triangle, Circle, Square} = require('./shapes');

test ('renders triangle correctly', () => {

    const triangle = new Triangle('blue');
    expect(triangle.render()).toEqual('<polygon points="150,50 200,150 100,150" fill="blue" />');

});

test ('renders circle correctly', () => {

    const circle = new Circle('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');

});

test ('renders square correctly', () => {

    const square = new Square('green');
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');

});