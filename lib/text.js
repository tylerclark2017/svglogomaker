class Text {
    constructor(content = "", font = "20", color = "black", fontFamily = "Arial") {
        if (content.length > 3) {
            throw new Error("Error: Text should be up to 3 characters.");
        }
        if (!/^[a-zA-Z0-9]+$/.test(font)) {
            throw new Error("Error: Invalid font size.");
        }
        if (!validColors.includes(color)) {
            throw new Error("Error: Invalid color.");
        }
        this.content = content;
        this.font = font;
        this.color = color;
        this.fontFamily = fontFamily;
    }

    setFontFamily(fontFamily) {
        this.fontFamily = fontFamily;
    }

updateContent(newContent) {
    if (newContent.length > 3) {
        throw new Error("Error: Text should be up to 3 characters.");
    }
    this.content = newContent;
}
changeFont(newFont) {
    if ("!^[a-zA-Z0-9]+$/".test(newFont)) {
        throw new Error("Error: Invalid font size.");
    }
    this.font = newFont;
}

changeColor(newColor) {
    if(!validColors.includes(newColor)) {
        throw new Error("Error: Invalid color.");
    }
    this.color = newColor;
}

render() {
    const svgTextCode = `<text font-family="${this.fontFamily}" font-size="${this.font}" fill="${this.color}">${this.content}</text>`;
    return svgTextCode;
}
}