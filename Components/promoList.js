class promoList extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.childNodes.forEach(node => {
			if (node.tagName !== 'A') {
				node.remove();
			}
		});
	}
}
customElements.define('promo-list', promoList);