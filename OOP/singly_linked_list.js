class Node{
    constructor(value){
        this.value = value
        this.next = null 
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    appendNode(data){ // T - O(1) constant time
        const newNode = new Node(data) 
        if(this.head === null){
            this.head = newNode 
            this.tail = this.head 
            this.size += 1 
            console.log(`New Node with value ${this.tail.value} appended`)
        } else {
            this.tail.next = newNode
            this.tail = newNode
            this.size += 1
            console.log(`New Node with value ${this.tail.value} appended`)
        }
    }
    displaySize(){  // T - O(1) constant time
        console.log(`This linked list has ${this.size} nodes.`)
    }
    displayValues(){  // T - O(n) 
        if(this.head === null) {
            console.log("This list is empty") 
        }else{
            let currentNode = this.head
            let result = ''
            while(currentNode !== null) {
                result += currentNode.value
                if(currentNode.next != null) result += ','  // appending a comma after element if it is not the last element
                currentNode = currentNode.next
            }
            console.log(result)
        }
    }
    displayFinalValue(){
        if(this.head != null){
            console.log(`Value of last node is ${this.tail.value}`)
        } else {
            console.log("This linked list is empty")
        }
    }
    
    prependNode(data){  // t - O(1) constant time
        const newNode = new Node(data) // creating a new Node object
        if(this.head == null){
            this.head = newNode
            this.tail = newNode
            this.size += 1
            console.log(`New Node with value ${this.head.value} prepended`)
        } else{
            newNode.next = this.head
            this.head = newNode
            this.size += 1
            console.log(`New Node with value ${this.head.value} prepended`)
        }
    }
}

// insert node at the beginning
// 1. list is empty
// 2. list has one element
// 3. list has more than one element

// FUNCTION INVOKE

// create a linked list object
const list = new SinglyLinkedList()

// insert node objects at the end of the list
list.appendNode(100)
list.appendNode(40)
list.appendNode(695.98)
list.appendNode(800)

// insert node object at the start of the list
list.prependNode(2.05)

// display the values inside all nodes
list.displayValues()

// display the total number of nodes in the list
list.displaySize()

// display the last node value in the list
list.displayFinalValue()

// Optimized: Decrease space complexity to display() by O(1)







