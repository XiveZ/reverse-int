module.exports = function reverse (n) {

    if(n.toString().includes('-')) return parseInt(n.toString().slice(1,n.length).split('').reverse().join(''))

    if(parseInt(n.toString().substring(n.toString().length-1, n.toString().length)) == 0 ) return parseInt(n.toString().slice(0, n.toString().indexOf('0')).split('').reverse().join(''))

    return parseInt(n.toString().split('').reverse().join(''));
}
