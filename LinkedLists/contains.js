class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let nodeA = new Node(18), nodeB = new Node(22), nodeC = new Node(69), nodeD = new Node(77), nodeE = new Node(10)
nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD
nodeD.next = nodeE

class SLL {
    constructor() {
        this.head = null
    }

    contains(val) {
        let valueFound = false, current = this.head
        while(current != null) {
            if(current.value === val) {
                valueFound = true
            }
            current = current.next
        }
        console.log(valueFound)
    }
}

let mySLL = new SLL;

mySLL.head = nodeA;

console.log('------ CONTAINS VALUE ------')
mySLL.contains(69)
mySLL.contains(12)