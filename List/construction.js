/**
 * 创建不可变的拥有集合功能的List 
 * List,相当于Array
 * List(): List<any>
 * List<T>(): List<T>
 * List<T>(collection: Interable<T>): List<T>
 */


const { List, Set, fromJS } = require('immutable');


const emptyList = List();
const emptyListFromJs = fromJS([]);
console.log('emptyList->', emptyList)  // List []
console.log('emptyListFromJs->', emptyListFromJs)  // List []



const plainArray = [1,2,3,4];
const listFromPlainArray = List(plainArray);
const listFromPlainArrayFromJs = fromJS(plainArray);
console.log('listFromPlainArray->', listFromPlainArray)  // List [1,2,3,4]
console.log('listFromPlainArrayFromJs->', listFromPlainArrayFromJs)  // List [1,2,3,4]


const plainSet = Set([ 1, 2, 3, 4 ])
const listFromPlainSet = List(plainSet)
console.log('listFromPlainSet->', listFromPlainSet)  // List [1,2,3,4]


const arrayIterator = plainArray[Symbol.iterator]();
const listFromCollectionArray = List(arrayIterator);
console.log('listFromCollectionArray->', listFromCollectionArray)  // List [1,2,3,4]



console.log(listFromPlainArray.equals(listFromPlainSet));    // true
console.log(listFromPlainArrayFromJs.equals(listFromPlainSet));    // true
console.log(listFromPlainArray.equals(listFromCollectionArray)); // true
console.log(listFromPlainSet.equals(listFromCollectionArray));   // true
