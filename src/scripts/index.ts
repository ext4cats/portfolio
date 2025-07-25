import { UAParser } from 'ua-parser-js';

const { browser } = UAParser(navigator.userAgent);
const ele = document.getElementById('browser-version');
if (!ele) throw new Error('Could not find browser-version element');
ele.textContent = `${browser.name} v${browser.version}`;
