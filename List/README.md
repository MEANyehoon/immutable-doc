# List documents #

* List是有序的有索引下标的集合，相当于javascript原声的Array(数组) 
* List是不可变的和完全持久化的，读写复杂度为O(log32 N), 进出(push, pop)复杂度为O(1)
* List实现了Deque(双端队列), 可以高效的在首末两端进行增删:push,pop,unshift,shift
* List于原生Array不同，List对没设置的值和设置为undefined的值没有明显的区别对待。List的forEach会从0遍历到数组的长度，无论某个索引对应的值是否被明确声明了
***
## 构造方法 Construction ##
### List() ###
> * 创建一个不可变的集合列表

        List(): List<any>
        List<T>(): List<T>
        List<T>(collection: Iterable<T>): List<T>
        
> 示例

    const emptyList = List()    // List []

    const plainArray = [ 1, 2, 3, 4 ]
    const listFromPlainArray = List(plainArray)
        // List [ 1, 2, 3, 4 ]

    const plainSet = Set([ 1, 2, 3, 4 ])
    const listFromPlainSet = List(plainSet)
        // List [ 1, 2, 3, 4 ]

    const arrayIterator = plainArray[Symbol.iterator]()
    const listFromCollectionArray = List(arrayIterator)
        // List [ 1, 2, 3, 4 ]

    listFromPlainArray.equals(listFromCollectionArray) // true
    listFromPlainSet.equals(listFromCollectionArray) // true
    listFromPlainSet.equals(listFromPlainArray) // true

***
  ## 静态方法 Static method ##