/**
 * 关于List的序列算法
 * 以下方法均返回新的List
 */
const { List, Map, fromJS } = require('immutable');

const {
    logWrap
} = require('../utils/log');
const FP = require('../utils/FP');
const originalList = List([1, 2, 3, 4]);

/**
 * concat<C>(...valuesOrCollections: Array<Iterable<C> | C>): List<T | C>
 * 将参数拼接在原List后
 * 可以用在withMutations方法中
 * 同义： merge
 */
logWrap('List Concat', () => {
    console.log(originalList.concat(5,6,7));    // List [ 1, 2, 3, 4, 5, 6, 7 ]
    console.log(originalList.concat([5,6,7]));  // List [ 1, 2, 3, 4, 5, 6, 7 ]
})

/**
 * map<M>(mapper: (value: T, key: number, iter: this) => M, context?: any): List<M>
 * 映射
 * 可以用在withMutations方法中
 */
logWrap('List Map', () => {
    console.log(originalList.map(x => x * 2));    // List [ 2, 4, 6, 8 ]
})

/**
 * filter<F>(predicate: (value: T, index: number, iter: this) => boolean, context?: any): List<F>
 * filter(predicate: (value: T, index: number, iter: this) => any, context?: any): this
 * 过滤
 * 可以用在withMutations方法中
 */
logWrap('List Filter', () => {
    console.log(originalList.filter(x => x % 2 === 0));    // List [ 2, 4 ]
})


/**
 * filterNot(predicate: (value: T, index: number, iter: this) => any, context?: any): this
 * 过滤 于filter相反
 * 可以用在withMutations方法中
 */
logWrap('List FilterNot', () => {
    console.log(originalList.filterNot(x => x % 2 === 0));    // List [ 1, 3 ]
})


/**
 * flatMap<M>(mapper: (value: T, key: number, iter: this) => Iterable<M>, context?: any): List<M>
 * list.map(...).flatten(true)
 */


 /**
  * zip(...collections: Array<Collection<any, any>>): List<any>
  * 按照相应索引，压缩value
  * 按照最短的List的长度压缩
  */
logWrap('List Zip', () => {
    const list_1 = List([4,5,6,7]);
    const list_2 = List([4,5,6,7,8]);
    const list_3 = [4,5,6,7,8];
    console.log(originalList.zip(list_1));  // List [ [1,4], [2,5], [3,6], [4,7] ];
    console.log(originalList.zip(list_1, list_2));  // List [ [1,4,4], [2,5,5], [3,6,6], [4,7,7] ]
    console.log(originalList.zip(list_1, list_3));  // List [ [1,4,4], [2,5,5], [3,6,6], [4,7,7] ]
    console.log(originalList.zip(list_1, list_2).map(arr => List(arr)));
        // List [ List [ 1, 4, 4 ], List [ 2, 5, 5 ], List [ 3, 6, 6 ], List [ 4, 7, 7 ] ]
})


/**
 * zipAll
 * TODO 4.0+
 */


/**
 * zipWith<Z>(zipper: (...any: Array<any>) => Z, ...collections: Array<Collection<any, any>>): List<Z>
 * 按照提供的zipper去压缩多个List
 */

logWrap('List ZipWith', () => {
    const list_1 = List([4,5,6,7]);
    const list_2 = List([4,5,6,7,8]);
    const list_3 = [4,5,6,7,8];
    const zipper2 = (a, b) => a + b;
    console.log(originalList.zipWith(zipper2, list_1));  // List [ 5, 7, 9, 11 ]
    const zipper3 = (a, b, c) => a + b + c;
    console.log(originalList.zipWith(zipper3, list_1, list_2));  // List [ 9, 12, 15, 18 ]
    console.log(originalList.zipWith(zipper3, list_1, list_3));  // List [ 9, 12, 15, 18 ]
})



 
/**
 * reverse()
 * Array#reverse
 * 可以用在withMutations方法中
 */
logWrap('List Reverse', () => {
    console.log(originalList.reverse());    // List [ 4, 3, 2, 1 ]
})


/**
 * sort(comparator?: (valueA: T, valueB: T) => number): this
 * 根据比较器函数排序 -1 | 0 | 1
 */
logWrap('List Sort', () => {
    console.log(originalList.sort(FP.comparator((a, b) => a > b)));    // List [ 4, 3, 2, 1 ]
    console.log(originalList.sort(FP.comparator((a, b) => a < b)));    // List [ 1, 2, 3, 4 ]
})

/**
 * sortBy<C>(
 *     comparatorValueMapper: (value: T, key: number, iter: this) => C,
 *     comparator?: (valueA: C, valueB: C) => number
 * ): this
 * eg: hitters.sortBy(hitter => hitter.avgHits)
 */


 /**
  * groupBy<G>(
  *     grouper: (value: T, key: number, iter: this) => G,
  *     context?: any
  * ): Seq.Keyed<G, Collection<number, T>>
  * 处理对象数组
  * 按照某一个key的value进行分组
  */
logWrap('List GroupBy', () => {
    const listOfMaps = List([
        Map({ id: 0, v: 0 }),
        Map({ id: 1, v: 1 }),
        Map({ id: 2, v: 1 }),
        Map({ id: 3, v: 0 }),
        Map({ id: 4, v: 2 })
      ]);
      console.log(listOfMaps.groupBy(x => x.get('v')));
        // OrderedMap { 
        //     0: List [ Map { "id": 0, "v": 0 }, Map { "id": 3, "v": 0 } ],
        //     1: List [ Map { "id": 1, "v": 1 }, Map { "id": 2, "v": 1 } ],
        //     2: List [ Map { "id": 4, "v": 2 } ]
        // }
})