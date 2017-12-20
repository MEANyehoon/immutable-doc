/**
 * 转换为js原生类型
 */
const {
    List,
    Map
} = require('immutable');

const {
    logWrap
} = require('../utils/log');

const originList = List([1, 2, 3, 4]);
const originListOfMaps = List([
    Map({
        a: 1
    }),
    Map({
        a: 2
    }),
    Map({
        a: 3
    }),
    Map({
        a: 4
    })
]);

/**
 * toJS: Array<T>
 */
logWrap('List toJS', () => {
    console.log(originList.toJS()); // [ 1, 2, 3, 4 ]
    console.log(originListOfMaps.toJS()); // [ { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 } ]
})

/**
 * toJSON(): Array<T>
 */
logWrap('List toJSON', () => {
    console.log(originList.toJSON()); // [ 1, 2, 3, 4 ]
    console.log(originListOfMaps.toJSON()); // [ { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 } ]
})

/**
 * toArray(): Array<T>
 * 表层
 */
logWrap('List toArray', () => {
    console.log(originList.toArray()); // [ 1, 2, 3, 4 ]
    console.log(originListOfMaps.toArray()); // [ Map { "a": 1 }, Map { "a": 2 }, Map { "a": 3 }, Map { "a": 4 } ]
})


/**
 * toObject(): {[key: string]: V}
 * 表层
 */
logWrap('List toObject', () => {
    console.log(originList.toObject()); // { '0': 1, '1': 2, '2': 3, '3': 4 }
    console.log(originListOfMaps.toObject());
    // { '0': Map { "a": 1 },
    //   '1': Map { "a": 2 },
    //   '2': Map { "a": 3 },
    //   '3': Map { "a": 4 } }
})

