dojoArray = [4,2,1,3,5]
dojoTest1 = [7,5,8,4,10,2,9,6]
dojoTest2 = [6,3,8,4,-2,4,7,69]

function minToFront(arr) {
    minNum = arr[0]
    lowestPos = undefined
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < minNum) {
            minNum = arr[i]
            lowestPos = i
        }
    }
    i = lowestPos
    while(i > 0) {
        arr[i] = arr[i - 1]
        i--
    }
    arr[0] = minNum;

    console.log(arr);
}

minToFront(dojoArray)

minToFront(dojoTest1)

minToFront(dojoTest2)