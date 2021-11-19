import 'focus-visible';
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';

documentReady(() => {
	lazyImages();
});

$('.multiple-items').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3
});
