const fs = require(fs);
const Shape = require("./lib.shapes.js");
const Text = require("lib./text.js")

class SVG {
    constructor() {
        this.shapes = [];
        this.text = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
    }
    addText(text) {
        this.texts.push(text);
    }
    render() {
        let svgCode = `svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;
        this.shapes.forEach(shape => {
            svgCode += shape.render();
        });
        this.texts.forEach(text => {
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
            console.error("Error: Invalid filename or permission denied.");
        }
    }
}

module.exports = SVG;