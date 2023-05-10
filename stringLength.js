const stringLength = (string) => {
    const array = string.split('');
    const l = array.length;
    if (l < 1 || l > 10) {
        return 'The string is not at least 1 character long or is longer than 10 characters';
    }
    return array.length;
}

module.exports = stringLength;
