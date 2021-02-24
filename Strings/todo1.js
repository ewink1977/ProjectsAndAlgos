let blankStr = " Pl ayTha tF u nkyM usi c "

function removeBlanks(str) {
    let newArr = str.split(""), i = 0;
    while(i < newArr.length) {
        if(newArr[i] === " ") {
            let j = i
            while(j < newArr.length - 1) {
                newArr[j] = newArr[j + 1]
            j++
            }
            newArr.pop()
        }
        else {
            i++
        }
    }
    let nonBlankStr = newArr.join("");
    return nonBlankStr
}

let digits = "0s1a3y5w7h9a2t4?6!8?0"

function getDigits(str) {
    let tempArr = []
    for(let i = 0; i < str.length; i++) {
        tempNum = Number(str[i]);
        if(isNaN(tempNum)) {
            continue } else {
                tempArr.push(tempNum)
            }
    }
    let newStr = tempArr.join("")
    return Number(newStr)
}

let initalism1 = " there's no free lunch - gotta pay yer way. "
let initalism2 = "Live from New York, it's Saturday Night!"

function initalisms(str) {
    let newArr = str.split(" "), tempArr = []
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i] === "") {
            continue
        } else {
            let holder = newArr[i][0].toUpperCase()
            tempArr.push(holder)
        }
    }
    let newInitalism = tempArr.join("")
    return newInitalism
}

let countString = "Honey pie, you are driving me crazy"

function countNonSpaces(str) {
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== " ") {
            count++
        }
    }
    return count
}

let strArray1 = ['hi', 'my', 'name', 'is', 'slim', 'shady']
let strArray2 = ['hello', 'world', 'this', 'is', 'a', 'string', 'array']

function removeShorterStrings(arr, val) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= val) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log('--**-- BLANK STRING --**--')
console.log(removeBlanks(blankStr))
console.log('--**-- GET DIGITS --**--')
console.log(getDigits(digits))
console.log('--**-- INITALISMS --**--')
console.log(initalisms(initalism1))
console.log(initalisms(initalism2))
console.log('--**-- COUNT NON-SPACES --**--')
console.log(countNonSpaces(countString))
console.log('--**-- REMOVE SHORTER STRINGS --**--')
console.log(removeShorterStrings(strArray1, 3))
console.log(removeShorterStrings(strArray2, 2))