function add(a, b){
    return a + b
}

const substract = (a, b) => {
    return a - b
}

module.exports = {
    add,
    substract
}
/*
Also equals to:

module.exports.add = add
module.exports.substract = substract
*/