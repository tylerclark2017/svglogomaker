class Text {
    constructor(content, font, color, fontFamily="Arial") {
        this.content = content;
        this.font = font;
        this.color= color;
        this.fontFamily = fontFamily;
    }
render() {

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
}