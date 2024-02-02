const fs = require("fs");


class SVG {
    constructor() {
        this.shapes = [];
        this.text = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
    }
    addText(text) {
        this.text.push(text);
    }
    render() {
        let svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;
        this.shapes.forEach(shape => {
            svgCode += shape.render();
        });
        this.text.forEach(text => {
            svgCode += text.render();
        });
        svgCode +=  '</svg>';
        return svgCode;
    }

    save(filename = "logo.svg") {
        try {
            fs.writeFileSync(filename, this.render());
            console.log(`SVG file ${filename} created successfully.`);
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = SVG;