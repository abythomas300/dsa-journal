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
    appendNode(data){ 
        const newNode = new Node(data) 
        if(this.head === null){
            this.head = newNode  // here
            this.tail = this.head // here
            this.size += 1 
            console.log(`New Node with value ${this.tail.value} appended`)
        } else {
            this.tail.next = newNode
            this.tail = newNode
            this.size += 1
            console.log(`New Node with value ${this.tail.value} appended`)
        }
    }
    displaySize(){
        console.log(`This linked list has ${this.size} nodes.`)
    }
    displayValues(){
        let result = ''
        if(this.head != null){
            let currentNode = this.head
            while(currentNode.next != null){ //here
                result = result + `${currentNode.value},`
                currentNode = currentNode.next 
            }
            result = result + `${currentNode.value}`
            console.log(result)
        } else {
            console.log("This linked list is empty.")
        }
    }
    displayFinalValue(){
        if(this.head != null){
            console.log(`Value of last node is ${this.tail.value}`)
        } else {
            console.log("This linked list is empty")
        }
    }
    reverseList(){
        let reversedListValues = []
        if(this.head == null){
            console.log("This list is empty.")
        } else if(this.head.next == null){
            console.log("This list has only one value: ", this.head.value)
        } else {
            let currentNode = this.head
            while(currentNode.next != null){
                reversedListValues.unshift(currentNode.value)
                currentNode = currentNode.next
            }
            reversedListValues.unshift(currentNode.value)
            console.log("Reversed List Values: ", reversedListValues)
        }
    }
    prependNode(data){
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

// reverse the list
list.reverseList()







