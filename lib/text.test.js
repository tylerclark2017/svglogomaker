const Text = require("./text.js")

describe ('Text', () => {
    it ('should change the color of the text object when the changeColor method is used', () => { 
        let testText = new Text ("TDC", "20", "black") 
        testText.changeColor("red");
        expect(testText.color).toBe("red")
    }) 
});
describe('Text', () => {
    describe('constructor', () => {
      it('should create a new instance of Text with default values', () => {
        const text = new Text();
        expect(text.content).toBe('');
        expect(text.font).toBe('20');
        expect(text.color).toBe('black');
        expect(text.fontFamily).toBe('Arial');
      });
  
      it('should create a new instance of Text with provided values', () => {
        const text = new Text('ABC', '30', 'red', 'Verdana');
        expect(text.content).toBe('ABC');
        expect(text.font).toBe('30');
        expect(text.color).toBe('red');
        expect(text.fontFamily).toBe('Verdana');
      });
  
      it('should throw an error if content length is greater than 3', () => {
        expect(() => new Text('ABCD')).toThrow('Error: Text should be up to 3 characters.');
      });
  
      it('should throw an error if font size is invalid', () => {
        expect(() => new Text('', 'abc')).toThrow('Error: Invalid font size.');
      });
  
      it('should throw an error if color is invalid', () => {
        expect(() => new Text('', '20', 'invalidColor')).toThrow('Error: Invalid color.');
      });
    });
  
    describe('setFontFamily', () => {
      it('should set the font family of the text', () => {
        const text = new Text();
        text.setFontFamily('Verdana');
        expect(text.fontFamily).toBe('Verdana');
      });
    });
  
    describe('updateContent', () => {
      it('should update the content of the text', () => {
        const text = new Text('ABC');
        text.updateContent('XYZ');
        expect(text.content).toBe('XYZ');
      });
  
      it('should throw an error if new content length is greater than 3', () => {
        const text = new Text();
        expect(() => text.updateContent('ABCD')).toThrow('Error: Text should be up to 3 characters.');
      });
    });
  
    describe('changeFont', () => {
      it('should change the font of the text', () => {
        const text = new Text();
        text.changeFont('30');
        expect(text.font).toBe('30');
      });
  
      it('should throw an error if new font size is invalid', () => {
        const text = new Text();
        expect(() => text.changeFont('abc')).toThrow('Error: Invalid font size.');
      });
      if (!/^[0-9]+$/.test(newFont)) {
        throw new Error("Error: Invalid font size.");
      }
    });
  
    describe('changeColor', () => {
      it('should change the color of the text', () => {
        const text = new Text();
        text.changeColor('red');
        expect(text.color).toBe('red');
      });
  
      it('should throw an error if new color is invalid', () => {
        const text = new Text();
        expect(() => text.changeColor('invalidColor')).toThrow('Error: Invalid color.');
      });
    });
  
    describe('render', () => {
      it('should return the SVG code for the text', () => {
        const text = new Text('ABC', '30', 'red', 'Verdana');
        const expectedSvgTextCode = '<text x ="130" y = "130" font-family="Verdana" font-size="30" fill="red">ABC</text>';
        expect(text.render()).toBe(expectedSvgTextCode);
      });
    });
  });