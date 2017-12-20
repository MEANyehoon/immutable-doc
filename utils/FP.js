


const existy = x => x != null;
const truthy = x => x !== false && existy(x);

exports.comparator = function (pred) {
    return function(x, y) {
        return truthy(pred(x, y)) ? -1 : truthy(pred(y, x)) ? 1 : 0;
    }
}


exports.existy = existy;
exports.truthy = truthy;