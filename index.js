const readline = require("readline");
const fs = require("fs");
const SVG = require("./svg.js");
const shapes = require("./shapes.js");
const Text = require("./.js");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const svg = new SVG();

const validShapes = ["circle", "triangle", "square"];
const validColors = [
  "red",
  "green",
  "blue",
  "black",
  "white",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFFFF",
];

rl.question("Enter text (up to 3 characters): ", (text) => {
  if (text.length > 3) {
    console.error("Error: Text should be up to 3 characters.");
    rl.close();
    return;
  }
  const newText = new Text(text, "20", "black");
  svg.addText(newText);

  rl.question("Enter text color (color keyword or hexadecimal number): ", (textColor) => {
    if (!validColors.includes(textColor)) {
      console.error("Error: Invalid text color.");
      rl.close();
      return;
    }
    newText.changeColor(textColor);

    rl.question(
      "Choose a shape (circle, triangle, square): ",
      (shape) => {
        if (!validShapes.includes(shape)) {
          console.error("Error: Invalid shape.");
          rl.close();
          return;
        }
        const newShape = new Shape(shape, 100, 100);

        rl.question("Enter shape color (color keyword or hexadecimal number): ", (shapeColor) => {
          if (!validColors.includes(shapeColor)) {
            console.error("Error: Invalid shape color.");
            rl.close();
            return;
          }
          newShape.setColor(shapeColor);
          svg.addShape(newShape);

          svg.save("logo.svg");
          console.log("Generated logo.svg");
          rl.close();
        });
      }
    );
  });
});

rl.on("close", () => {
  console.log("\nExiting...");
});