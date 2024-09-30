import { getPixelsAll } from './themeswitcher';
import { socket } from './chat';

window.onload = function () {
    $('.linksbox').hide();
    getPixelsAll();
    socket.emit('newUser');
};
