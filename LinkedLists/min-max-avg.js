class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let nodeA = new Node(18), nodeB = new Node(22), nodeC = new Node(69), nodeD = new Node(77), nodeE = new Node(10), nodeF = new Node(30), nodeG = new Node(5)
nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD
nodeD.next = nodeE
nodeE.next = nodeF
nodeF.next = nodeG

// END OF NODE MAGIC!

class SLL {
    constructor() {
        this.head = null
    }

    findMax() {
        let runner = this.head, max = 0
        while(runner) {
            if (runner.value > max) {
                max = runner.value
                runner = runner.next
            } else {
                runner = runner.next
            }
        }
        console.log(max)
    }

    findMin() {
        let runner = this.head, min = runner.value
        while(runner) {
            if (runner.value < min) {
                min = runner.value
                runner = runner.next
            } else {
                runner = runner.next
            }
        }
        console.log(min)
    }

    findAverage() {
        let runner = this.head, sum = 0, count = 0
        while (runner) {
            sum += runner.value
            count++
            runner = runner.next
        }
        let average = sum / count
        console.log(average)
    }
}
let mySLL = new SLL;
mySLL.head = nodeA;

console.log('------ MAX ------')
mySLL.findMax()
console.log('------ MIN ------')
mySLL.findMin()
console.log('------ AVERAGE ------')
mySLL.findAverage()
