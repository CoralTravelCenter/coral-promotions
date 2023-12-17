class promoItem extends HTMLElement {
	constructor(template) {
		super();
		this.element_template = template;
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.append(this.element_template.content.cloneNode(true));
	}

	connectedCallback() {
		this.promo_link = this.shadowRoot.querySelector('.promo-item__link');
		let end = this.promo_link.dataset.end;
		if (end !== '' && moment().isSameOrAfter(dateFormatter(end))) {
			this.remove();
		}
	}
};
customElements.define('promo-item', promoItem);

PROMO_SETTINGS.forEach(promo => {
	const item_template = document.createElement('template');
	item_template.innerHTML = `
		<style>
		  .promo-item__link {
				width: 100%;
				cursor: pointer;
				background-position: 50%;
				background-repeat: no-repeat;
				background-size: cover;
				border-radius: 20px;
				transition: border-color .3s ease, box-shadow .3s ease;
				display: block;
				position: relative;
			}

			.promo-item__link:hover {
				border-color: #0093d0;
    		box-shadow: 0 0 8px rgba(0, 146, 208, .4);
			}

			.promo-item__link:after {
				content: "";
				width: 100%;
				padding-top: 53.2164%;
				display: block;
			}

			.promo-item__visual {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 20px;
			}
		</style>
		<a class='promo-item__link' href='${promo.url}' target="_blank" data-begin='${promo.begin}' data-end='${promo.end}' name='${promo.name}'>
				<img class='promo-item__visual' src='${promo.visual}'/>
		</a>
	`;

	if (moment().isSameOrAfter(dateFormatter(promo.begin))) {
		document.querySelector('promo-list').append(new promoItem(item_template));
	}
});


