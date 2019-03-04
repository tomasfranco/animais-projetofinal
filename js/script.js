import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import iniFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();


initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
iniFetchAnimais();
initFetchBitcoin();
