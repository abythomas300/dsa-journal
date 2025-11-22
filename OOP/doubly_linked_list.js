class Node {
    constructor(value) {
        this.prev = null
        this.value = value
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    appendNode(data) {  // T - O(1) constant time
        const newNode = new Node(data)
        // 1. if the list is null2
        if(this.head === null) {
            this.head = newNode
            this.tail = newNode 
            return 
        }
        // 2. if the list has only single element
        if(this.head.next === null){
            this.head.next = newNode
            this.tail = newNode
            this.tail.prev = this.head
            return
        }
        // 3. if the list has more than 1 element
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }
    displayValues() {  // T - O(n) 
        // 1. list is null
        if(this.head === null) {
            console.log("this list is empty")
            return 
        }
        // 2. list has only one element
        if(this.head.next === null) {
            console.log("T")
            console.log("his list has only one node: ", this.head.value)
            return 
        }
        // 3. has more than 1 element
        let currentNode = this.head
        let result = 'List values in order: '
        while(currentNode != null) {
            result += currentNode.value
            if(currentNode.next != null) result += ', '
            currentNode = currentNode.next
        }
        console.log(result)
        return
    }
    displayReverse() {  // T - O(n)
        // 1. list is null
        if(this.head === null) {
            console.log("this list is empty")
            return 
        }
        // 2. list has only one element
        if(this.head.next === null) {
            console.log("T")
            console.log("his list has only one node: ", this.head.value)
            return 
        }
        let currentNode = this.tail
        let result = 'List values in reverse: '
        while(currentNode != null) {
            result += currentNode.value
            if(currentNode.prev !== null) result += ', '
            currentNode = currentNode.prev
        }
        console.log(result)
        return
    }
}

// utility function for easy node creation 
function createAsGroup(nodeItems) {
    nodeItems.forEach((nodeItem)=>{
        list.appendNode(nodeItem)
    })
}


const list = new DoublyLinkedList() 
const nodeValue = [400, 2, 85, 50, 4564, -89, 87 , 2356468498]  // can add values of nodes to be created here

createAsGroup(nodeValue)
list.displayValues()
list.displayReverse()