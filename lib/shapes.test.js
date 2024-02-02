const { Shape, Triangle, Circle, Square, Logo } = require('./shapes.jsse');

describe('Shape', () => {
  describe('constructor', () => {
    it('should create a new instance of Shape with default color', () => {
      const shape = new Shape();
      expect(shape.color).toBe('');
      expect(shape.text).toBe('');
    });

    it('should create a new instance of Shape with provided color', () => {
      const shape = new Shape('red');
      expect(shape.color).toBe('red');
      expect(shape.text).toBe('');
    });

    it('should throw an error if color is invalid', () => {
      expect(() => new Shape('invalidColor')).toThrow('Error: Invalid color.');
    });
  });

  describe('setColor', () => {
    it('should set the color of the shape', () => {
      const shape = new Shape();
      shape.setColor('blue');
      expect(shape.color).toBe('blue');
    });

    it('should throw an error if color is invalid', () => {
      const shape = new Shape();
      expect(() => shape.setColor('invalidColor')).toThrow('Error: Invalid color.');
    });
  });

  describe('setText', () => {
    it('should set the text of the shape', () => {
      const shape = new Shape();
      shape.setText('Hello');
      expect(shape.text).toBe('Hello');
    });
  });

  describe('render', () => {
    it('should return an empty string', () => {
      const shape = new Shape();
      expect(shape.render()).toBe('');
    });
  });
});

describe('Triangle', () => {
  describe('constructor', () => {
    it('should create a new instance of Triangle with default color', () => {
      const triangle = new Triangle();
      expect(triangle.color).toBe('');
      expect(triangle.text).toBe('');
    });

    it('should create a new instance of Triangle with provided color', () => {
      const triangle = new Triangle('red');
      expect(triangle.color).toBe('red');
      expect(triangle.text).toBe('');
    });

    it('should throw an error if color is invalid', () => {
      expect(() => new Triangle('invalidColor')).toThrow('Error: Invalid color.');
    });
  });

  describe('render', () => {
    it('should return the SVG code for a triangle with the given color', () => {
      const triangle = new Triangle('blue');
      const expectedSvgTriangleCode = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      expect(triangle.render()).toBe(expectedSvgTriangleCode);
    });
  });
});

describe('Circle', () => {
  describe('constructor', () => {
    it('should create a new instance of Circle with default color', () => {
      const circle = new Circle();
      expect(circle.color).toBe('');
      expect(circle.text).toBe('');
    });

    it('should create a new instance of Circle with provided color', () => {
      const circle = new Circle('red');
      expect(circle.color).toBe('red');
      expect(circle.text).toBe('');
    });

    it('should throw an error if color is invalid', () => {
      expect(() => new Circle('invalidColor')).toThrow('Error: Invalid color.');
    });
  });

  describe('render', () => {
    it('should return the SVG code for a circle with the given color', () => {
      const circle = new Circle('blue');
      const expectedSvgCircleCode = '<circle cx="150" cy="150" r="100" fill="blue" />';
      expect(circle.render()).toBe(expectedSvgCircleCode);
    });
  });
});

describe('Square', () => {
  describe('constructor', () => {
    it('should create a new instance of Square with default color', () => {
      const square = new Square();
      expect(square.color).toBe('');
      expect(square.text).toBe('');
    });

    it('should create a new instance of Square with provided color', () => {
      const square = new Square('red');
      expect(square.color).toBe('red');
      expect(square.text).toBe('');
    });

    it('should throw an error if color is invalid', () => {
      expect(() => new Square('invalidColor')).toThrow('Error: Invalid color.');
    });
  });

  describe('render', () => {
    it('should return the SVG code for a square with the given color', () => {
      const square = new Square('blue');
      const expectedSvgSquareCode = '<rect x="50" y="50" width="200" height="200" fill="blue" />';
      expect(square.render()).toBe(expectedSvgSquareCode);
    });
  });
});

describe('Logo', () => {
  describe('constructor', () => {
    it('should create a new instance of Logo with default color and null shape', () => {
      const logo = new Logo();
      expect(logo.color).toBe('');
      expect(logo.text).toBe('');
      expect(logo.shape).toBeNull();
    });
  });

  describe('setShape', () => {
    it('should set the shape of the logo', () => {
      const logo = new Logo();
      const shape = new Triangle();
      logo.setShape(shape);
      expect(logo.shape).toBe(shape);
    });
  });

  describe('render', () => {
    it('should return the SVG code for the logo with the shape rendered', () => {
      const logo = new Logo();
      const shape = new Triangle('blue');
      logo.setShape(shape);
      const expectedSvgLogoCode = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">${shape.render()}</svg>`;
      expect(logo.render()).toBe(expectedSvgLogoCode);
    });
  });
});