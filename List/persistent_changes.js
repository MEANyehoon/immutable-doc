/**
 * Persistent Changes
 * 以下方法都会返回新的List
 */

const { List } = require('immutable');

const { logWrap } = require('../utils/log');
const originalList = List([1,2,3,4]);
/**
 * set(index: number, value: T): List<T>
 * index可以是负数，表示从末尾计算
 * index如果超过原有的长度，List会扩充到可以容纳index的长度
 * 可以用在withMutations方法中
 */

logWrap('List set', () => {
    console.log(originalList.set(2, 1));    // List [ 1, 2, 1, 4 ]
    console.log(originalList.set(0, 'overwritten'));    // List [ "overwritten", 2, 3, 4 ]
    console.log(originalList.set(5, 2));    // List [ 1, 2, 3, 4, undefined, 2 ]
    console.log(originalList.set(5000, 'value').size)   // 5001
})


/**
 * delete(index: number): List<T>
 * 删除指定index位置内容,
 * index可以是负数，表示从末尾计算
 * List长度会减1
 * index后边的元素的索引会依次减1
 * 因为索引会改变，所以复杂度为o(N)
 * 不可以用在withMutations方法中
 * 同名: remove()
 */
logWrap('List delete', () => {
    console.log(originalList.delete(0)); // List [ 2, 3, 4]
    console.log(originalList.delete(-1));    // List [ 1, 2, 3 ]
    console.log(originalList.delete(1000));    // List [ 1, 2, 3, 4 ]
})


/**
 * insert(index: number, value:T): List<T>
 * 在指定index位置插入内容,
 * index可以是负数，表示从末尾计算
 * List长度会加1
 * index后边的元素的索引会依次加1
 * 因为索引会改变，所以复杂度为o(N)
 * 不可以用在withMutations方法中
 * 同名: list.splice(index, 0, value);
 */
logWrap('List insert', () => {
    console.log(originalList.insert(0, 6)); // List [ 6, 1, 2, 3, 4 ]
    console.log(originalList.insert(-1, 6));    // List [ 1, 2, 3, 6, 4,]
    console.log(originalList.insert(1000, 6));    // List [ 1, 2, 3, 4, 6 ]
})

/**
 * clear(): List<T>
 * 返回一个长度为0，内容为空的list
 * 可以用在withMutations方法中
 */
logWrap('List clear', () => {
    console.log(originalList.clear());    // List []
})

/**
 * push(...values: Array<T>): List<T>
 * 同Array#push 不过，返回新的List
 * 可以用在withMutations方法中
 */
logWrap('List Push', () => {
    console.log(originalList.push(5,6,7));    // List [ 1, 2, 3, 4, 5, 6, 7 ]
})


/**
 * pop(): List<T>
 * 同Array#pop 不过，返回新的List
 * 可以用在withMutations方法中
 */
logWrap('List Pop', () => {
    console.log(originalList.pop());    // List [ 1, 2, 3 ]
})

/**
 * unshift(...values: Array<T>): List<T>
 * 同Array#unshift 不过，返回新的List
 * 可以用在withMutations方法中
 */
logWrap('List Unshift', () => {
    console.log(originalList.unshift(5,6,7));    // List [ 5, 6, 7, 1, 2, 3, 4 ]
})

/**
 * shift(): List<T>
 * 同Array#shift 不过，返回新的List
 * 可以用在withMutations方法中
 */
logWrap('List Shift', () => {
    console.log(originalList.shift());    // List [ 2, 3, 4 ]
})