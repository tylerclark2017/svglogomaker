class Shape {
    constructor() {
        this.color = "";
        this.text = "";
    }

setColor(color) {
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
    render() {
        const svgTriangleCode = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
        return svgTriangleCode;
    }
}
class Circle extends Shape {
    render() {
        const svgCircleCode = `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
        return svgCircleCode;
    }
}
class Square extends Shape {
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
    const svgLogoCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${this.shape.render()}
  </svg>`;
  return svgLogoCode;
}
}

module.exports  = { Shape, Triangle, Circle, Square, Logo };