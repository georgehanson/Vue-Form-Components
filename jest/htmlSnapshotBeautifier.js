const snapshot = require('jest-snapshot');
const beautify = require('js-beautify');

module.exports = {
    test(object){
        return typeof object == 'string' && object[0] === '<';
    },
    print(val, print, opts, colors) {
        return beautify(val, {});
    }
};