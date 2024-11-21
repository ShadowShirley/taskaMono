import IMask from 'imask'

const element = document.getElementById('phone');
const maskOptions = {
    mask: '+{7}(000)000-00-00',
    startsWith: '7',
    lazy: true,
    country: 'Russia'
};
const mask = IMask(element, maskOptions);