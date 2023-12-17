function mainBannerGenerator() {
	const KV = document.querySelector('section.kv');
	const LINK = document.querySelector('section.kv a');
	LINK.href = MAIN_BANNER_SETTINGS.url;
	LINK.name = MAIN_BANNER_SETTINGS.name;
	KV.style.setProperty("--IMG_URL", `url(${MAIN_BANNER_SETTINGS.visual})`);
	if (LINK.toggleSomething.condition === true) {
		LINK.setAttribute('data-toggle', promo.toggleSomething.toggle);
		LINK.setAttribute('data-target', promo.toggleSomething.target);
	}
}
mainBannerGenerator();