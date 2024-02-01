// script.js
import { toggleMenu } from './modules/menu.js'; 
import {setupPortFolioMenu } from './modules/menu.js'
import { onScroll } from './modules/menu.js'
import { modalPort } from './modules/menu.js'
import { slider } from './modules/slider.js'
import { catalogue } from './modules/catalogue.js'

globalThis.catalogue = catalogue;
globalThis.slider = slider;

 
toggleMenu();
setupPortFolioMenu();
onScroll();
modalPort();
// slider();
