/**
 * List的静态方法和成员变量
 */

 const { List } = require('immutable');

 /**
  * 判断一个变量是否为Immutable.List
  * List.isList(maybeList: any) : boolean
  */
console.log(List.isList([]));   // false
console.log(List.isList(List()));   // true


/**
 * 通过值创建List
 * List.of<T>(...values: Array<T>): List<T>
 */

 console.log(List.of(1,2,3,4)); // List [ 1, 2, 3, 4 ]

 // 值可以是任意类型
 console.log(List.of(List([1,2,3,4]), 2, [3, 4], 4));  // List [ List [ 1, 2, 3, 4 ], 2, [3,4], 4 ]


 /**
  * size 长度
  */
  console.log(List.of(1,2,3,4).size); // 4