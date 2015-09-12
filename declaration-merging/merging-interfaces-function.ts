interface Document {
	createElement(tagName: any): Element;
}
interface Document {
	createElement(tagName: string): HTMLElement;
}
interface Document {
	createElement(tagName: "div"): HTMLDivElement;
	createElement(tagName: "span"): HTMLSpanElement;
	createElement(tagName: "canvas"): HTMLCanvasElement;
}
