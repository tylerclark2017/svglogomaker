const fs = require('fs')
const SVG = require('./svg.js')
const Shape  = require("./shapes.js")
const Text = require("./text.js")

describe('SVG', () => {
  describe('constructor', () => {
    it('should create a new instance of SVG with empty shapes and text arrays', () => {
      const svg = new SVG();
      expect(svg.shapes).toEqual([]);
      expect(svg.text).toEqual([]);
    });
  });

  describe('addShape', () => {
    it('should add a shape to the shapes array', () => {
      const svg = new SVG();
      const shape = new Shape();
      svg.addShape(shape);
      expect(svg.shapes).toContain(shape);
    });
  });

  describe('addText', () => {
    it('should add a text to the text array', () => {
      const svg = new SVG();
      const text = new Text();
      svg.addText(text);
      expect(svg.text).toContain(text);
    });
  });

  describe('render', () => {
    it('should return the SVG code for all shapes and text', () => {
      const svg = new SVG();
      const shape = new Shape();
      const text = new Text();
      svg.addShape(shape);
      svg.addText(text);
      const expectedSvgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shape.render()}${text.render()}</svg>`;
      expect(svg.render()).toBe(expectedSvgCode);
    });
  });

  describe('save', () => {
    it('should save the SVG code to a file', () => {
      const svg = new SVG();
      const shape = new Shape();
      svg.addShape(shape);
      const filename = 'logo.svg';
      const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync');
      svg.save(filename);
      expect(writeFileSyncSpy).toHaveBeenCalledWith(filename, svg.render());
      expect(console.log).toHaveBeenCalledWith(`SVG file ${filename} created successfully.`);
    });

    it('should handle errors when saving the SVG code to a file', () => {
      const svg = new SVG();
      const shape = new Shape();
      svg.addShape(shape);
      const filename = 'logo.svg';
      const error = new Error('File write error');
      const writeFileSyncMock = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
        throw error;
      });
      const consoleErrorSpy = jest.spyOn(console, 'error');
      svg.save(filename);
      expect(writeFileSyncMock).toHaveBeenCalledWith(filename, svg.render());
      expect(consoleErrorSpy).toHaveBeenCalledWith(error);
    });
  });
});