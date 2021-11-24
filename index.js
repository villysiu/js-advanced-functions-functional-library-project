let myEach = (collection, callback) => {
    
    Object.values(collection).forEach(a=> callback(a))
    return collection
}
let myMap = (collection, callback) => {
    let newArray = []
     Object.values(collection).forEach(a=> newArray.push(callback(a)))
  
    return newArray
}
let myReduce = (collection, callback, initValue) => {
    let result 
    let i=0
    let valueArray = myMap(collection, x=>x)
    if (initValue) {
        result = callback(initValue, valueArray[0])
        i=1
    }  else {
        result = callback(valueArray[0], valueArray[1])
        i=2
    }
   
    for (i; i<valueArray.length; i++) {
        result = callback(result, valueArray[i])
    }
    return result
}
let myFind = (collection, func)=> {
    let values = myMap(collection, x=>x)
    for (let i=0; i<values.length; i++) {
        if (func(values[i])) {
            return values[i]
        }
    }
    return undefined
}
let myFilter = (collection, func) => {
    let values = Object.values(collection)
    let newArr = []
    values.forEach(x=> {
        if (func(x)) {
            newArr.push(x)
        }
    })
    return newArr
}
let mySize = (collection) => {
    let values = Object.values(collection)
    let i=0
    values.forEach(x=> i++)
    return i
}
let myFirst = (collection, count=1) => {
//     let values = Object.values(collection)
//     let newArr = []
//     for (let i=0; i<count; i++) {
//         newArr.push(values[i])
//     }
//    return (newArr.length === 1) ?  newArr[0]  : newArr
return (count === 1) ? collection[0] : collection.slice(0, count)
}
let myLast = (collection, count=1) => {
//     let values = Object.values(collection)
//     let newArr = []
//     for (let i=collection.length-count; i<collection.length; i++) {
//         newArr.push(values[i])
//     }
//    return (newArr.length === 1) ?  newArr[0]  : newArr
console.log(collection[collection.length-1])
return  (count === 1) ?  collection[collection.length-1]  : collection.slice(count*-1)
}

let myKeys = (collection) => {
    // return Object.keys(collection)
    let newArr = []
    for (let key in collection){
        newArr.push(key)
    }
    return newArr
}
let myValues = (collection) => {
    let newArr = []
    for (let key in collection){
        newArr.push(collection[key])
    }
    return newArr
}