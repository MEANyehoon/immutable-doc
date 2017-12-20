/**
 * Deep persistent changes
 * 以下方法都会返回一个新的List
 * 并且嵌套的可引用类型数据，都没有被改变
 */

const { List, Map, fromJS } = require('immutable');

const {
    logWrap
} = require('../utils/log');


const originalList_1 = List([ 0, 1, 2, List([ 3, 4 ])]);
const originalList_2 = List([ 0, 1, 2, Map({'plain': 'object'})]);


/**
 * setIn(keyPath: Iterable<any>, value: any): this
 * 以值的形式新增或更新keyPath的对应位置
 * 可以用在withMutations方法中
 */
logWrap('List SetIn', () => {
    console.log(originalList_1.setIn([3, 0], 'abc')); // List [ 0, 1, 2, List [ "abc", 4 ] ]
    console.log(originalList_2.setIn([3, 'plain'], 'value'));    // List [ 1, 2, 3, Map { "plain": "value" } ]
    console.log(originalList_1.setIn([3,4], 1)) // List [ 0, 1, 2, List [ 3, 4, undefined, undefined, 1 ] ]
    console.log(originalList_1.setIn([5,'test'], 1)) // List [ 0, 1, 2, List [ 3, 4 ], undefined, Map { 'test': 1 } ]
})


/**
 * deleteIn(keyPath: Iterable<any>): this
 * 删除指定keyPath的对应位置
 * 如果不存在keyPath对应的位置，不会发生任何变化
 * 不可以用在withMutations方法中
 * 同名: removeIn()
 */
logWrap('List DeleteIn', () => {
    console.log(originalList_1.deleteIn([3, 0])); // List [ 0, 1, 2, List [ 4 ] ]
    console.log(originalList_1.deleteIn([3,999])) // List [ 0, 1, 2, List [ 3, 4 ] ]
    console.log(originalList_2.deleteIn([3, 'plain']));    // List [ 0, 1, 2, Map {} ]
})


/**
 * updateIn(keyPath: Iterable<any>, notSetValue: T, updater: (value: T) => T): this
 * updateIn(keyPath: Iterable<any>, updater: (value: T) => T): this
 * 将keyPath位置对应的值，通过updater运算后，更新于keyPath位置
 * 如果keyPath位置没有值，用第二个参数作为该位置的初始值，再通过updater运算
 * 可以用在withMutations方法中
 */
logWrap('List UpdateIn', () => {
    console.log(originalList_1.updateIn([3, 0], val => val * 2)) // List [ 0, 1, 2, List [ 6, 4 ] ]
    console.log(originalList_1.updateIn([3, 3], 9, val => val * 2)); // List [ 0, 1, 2, List [ 3, 4, undefined, 18 ] ]
})


/**
 * mergeIn(keyPath: Iterable<any>, ...collections: Array<any>): this
 * 可以用在withMutations方法中
 * 参考Map#mergeIn
 * ../Map/deep_persistent_changes.js
 */

 /**
 * mergeDeepIn(keyPath: Iterable<any>, ...collections: Array<any>): this
 * 可以用在withMutations方法中
 * 参考Map#mergeDeepIn
 * ../Map/deep_persistent_changes.js
 */

 