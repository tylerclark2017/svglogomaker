const validColors = require("./validColors.js")

class Shape {
    constructor(color = "black") {
        if (!validColors.includes(color)) {
            throw new Error("Error: Invalid color.")
        }
        this.color = color;
        this.text = "";
    }

setColor(color) {
    if(!validColors.includes(color)) {
        throw new Error("Error: Invalid color.")
    }
    this.color = color;
}

setText(text) {
    this.text = text;
}

render() {
    return "";
}
}
class Triangle extends Shape {
    constructor(color = "black") {
        super(color);
      }
      render() {
        const svgTriangleCode = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
        return svgTriangleCode;
      }
}

class Circle extends Shape {
    constructor(color = "black") {
        super(color);
    }
    render() {
        const svgCircleCode = `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
        return svgCircleCode;
      }
}

class Square extends Shape {
    constructor(color = "black") {
        super(color);
    }
    render() {
        const svgSquareCode = `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
        return svgSquareCode;
    }
}

class Logo extends Shape {
    constructor(){
        super();
        this.shape = null;
    }
    setShape(shape){
        this.shape = shape;
    }
    render() {
        const svgLogoCode = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">${this.shape.render()}</svg>`;
        return svgLogoCode;
      }
}

module.exports  = { Shape, Triangle, Circle, Square, Logo };