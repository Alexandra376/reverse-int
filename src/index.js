module.exports = function reverse (n) {
    if (n >= 0) {
        return Math.abs(String(+n).split('').reverse().join(''))
    }else{
        return Math.abs(String(-n).split('').reverse().join(''))
    }
};
