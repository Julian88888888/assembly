import LazyLoad from "vanilla-lazyload";
import canUseWebp from "../helpers/canUseWebp";

export default () => {
	if (canUseWebp() === false) {
		const LazyBgItems = document.querySelectorAll('.lazy[data-bg-fallback]')

		LazyBgItems.forEach((item) => {
			const srcBgFallback = item.getAttribute('data-bg-fallback');
			item.setAttribute('data-bg', srcBgFallback);
		});
	}


	const lazyloadInstance = new LazyLoad({
		elements_selector: '.lazy',
	});
};
