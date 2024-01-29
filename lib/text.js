class Text {
    constructor(content, font, color, fontFamily="Arial") {
        this.content = content;
        this.font = font;
        this.color= color;
        this.fontFamily = fontFamily;
    }

    setFontFamily(fontFamily) {
        this.fontFamily = fontFamily;
    }

updateContent(newContent) {
    this.content = newContent;
}
changeFont(newFont) {
    this.font = newFont;
}

changeColor(newColor) {
    this.color = newColor;
}

render() {
    const svgTextCode = `<text font-family="${this.fontFamily}" font-size="${this.font}" fill="${this.color}">${this.content}</text>`;
    return svgTextCode;
}
}