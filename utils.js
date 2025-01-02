function add(a, b) {
    if (isNaN(a)) return "Invalid Input";
    if (isNaN(b)) return "Invalid Input";
    return parseInt(a) * parseInt(b);
}

module.exports = add;