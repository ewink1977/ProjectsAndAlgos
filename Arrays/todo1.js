testArr = [2,4,5,8,7,13,12,9,0]
testArr2 = [7,11,15,14,8,3,10,5]
arrayThree = ['Men', 'At', 'Work', 7, 'Hatsune', 11, 69, 'Airplane', 0]

console.log('++++++ PUSH FRONT ++++++')
function pushFront(arr, val) {
    for(var i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i]
    }
    arr[0] = val
    console.log(arr)
}

pushFront(testArr, 69)

console.log('++++++ POP FRONT ++++++')
function popFront(arr) {
    var front = arr[0]
    i = 0
    while(i < arr.length - 1) {
        arr[i] = arr[i + 1]
        i++
    }
    arr.pop()
    console.log(arr, 'deleted arr value is ' + front)
}

popFront(testArr)

console.log('++++++ INSERT AT ++++++')
function insertAt(arr, idx, val) {
    for(var i = arr.length - 1; i >= idx; i--) {
        arr[i + 1] = arr[i]
    }
    arr[idx] = val
    console.log(arr)
}

insertAt(testArr2, 5, 69)

console.log('++++++ REMOVE AT ++++++')
function removeAt(arr, idx) {
    var killedValue = arr[idx]
    i = idx
    while(i < arr.length - 1) {
        arr[i] = arr[i + 1]
        i++
    }
    arr.pop()
    console.log(arr, 'deleted arr value is ' + killedValue)
}

removeAt(testArr2, 7)

console.log('++++++ PUSH FRONT ++++++')
function swapPairs(arr) {
    if(arr.length % 2 === 1) {
        loopLength = arr.length - 1
    }
    else {
        loopLength = arr.length
    }
    for(var i = 0; i < loopLength - 1; i = i + 2) {
        var temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp
    }
    console.log(arr)
}

swapPairs(arrayThree)

duplicatedArray = [1,2,2,2,3,4,5,5,5,5,5,6,7,7,7,8,9,9,9]

console.log('++++++ REMOVE DUPLICATES ++++++')
function removeDuplicates(arr) {
    for(var i = 0; i < arr.length; i++) {
        while(arr[i] === arr[i + 1]) {
            var idx = i + 1
            removeAt(arr, idx)
        }
    }
    console.log(arr)
}

removeDuplicates(duplicatedArray)