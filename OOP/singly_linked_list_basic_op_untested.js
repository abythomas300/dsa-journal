class Node {
    constructor(data=null) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
        console.log("L.L initialized.")
    }

    append(value=null) {
        // If user did't provide a value
        if(value === null) {
            console.log("Warning: Cannot add node without a value, input a valid value first.")
            console.log("Append operation failed.")
            return
        }
        // Case 1: When L.L is empty
        if(this.length === 0) {
            const newNode = new Node(value)
            this.head = newNode
            this.tail = newNode
        } else {
            // Case 2: When L.L is not empty
            const newNode = new Node(value)
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        console.log("\n✅ 1 node appended successfully.")
    }

    prepend(value=null) {
        // If user did't provide a value
        if(value === null) {
            console.log("Warning: Cannot add node without a value, input a valid value first.")
            console.log("Prepend operation failed.")
            return 
        }
        // Case 1: When L.L is empty
        if(this.length === 0) {
            const newNode = new Node(value)
            this.head = newNode
            this.tail = newNode
        } else {
        // Case 2: When L.L is not empty
            const newNode = new Node(value)
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        console.log("\n✅ 1 node prepended successfully.")
    }

    appendAfter(position=null, value = null) {
        // If user does not provide a proper position or value
        if(position===null || position===0 || value===null || position < 0 || position > this.length) {
            console.log("Warning: Provide a valid position/value to append the node.")
            console.log("Append operation failed.")
            return
        }

        // Case 1: When user provided the last position
        if(position === this.length) 
            this.append(value)
        else {
        // Case 2: When user provided any middle position
            const newNode = new Node(value)
            let temp = new Node()
            temp = this.head
            let pos = 1
            while(pos !== position) {
                temp = temp.next 
                pos++
            }
            newNode.next = temp.next
            temp.next = newNode
            this.length++
            console.log("\n✅ 1 node appended successfully.")
        }


    }

    display() {
        // Case 1: When L.L is empty
        if(this.length === 0) {
            console.log("L.L is empty.")   
        } else {
        // Case 2: When L.L is not empty
            console.log("\n***** MY TO-DO LIST *****")
            // Sub-case 1: When L.L has only one node
            if(this.length === 1) 
                console.log(`1. ${this.head.data}`)
            else {
                // Sub-case 2: When L.L has only two nodes 
                if(this.length === 2) {
                    console.log(`1. ${this.head.data}`)
                    console.log(`2. ${this.head.next.data}`)
                } else {
                // Sub-case 3: When L.L has more than two nodes
                    let temp = new Node()
                    let counter = 1
                    temp = this.head
                    while(temp !== null) {
                        console.log(`${counter}. ${temp.data}`)
                        temp = temp.next
                        counter++
                    }
                }
            }
        } 
    }

    isExist(value=null) {
        // If user does not provide a target value
        if(value === null) {
            console.log("Warning: Cannot search node without a target value, input a valid value first.")
            console.log("Search operation failed.")
            return
        }
        // Case 1: When L.L is empty
        if(this.length === 0) {
            console.log("Cannot find target value in an empty L.L")
        } else {
        // Case 2: When L.L is not empty
            let temp = new Node()
            let flag = false
            temp = this.head
            while(temp !== null) {
                if(temp.data === value) {
                    console.log(`${value} exists atleast once in this L.L (First occurance at node number ${this.length})`)
                    flag = true
                    break
                }
                temp = temp.next
            }
            if(!flag)
                console.log("Target node does not exist.")
        }
    }

    showLength() {
        console.log(this.length === 0? 'L.L is empty.' : `Total node count is: ${this.length}`)
        return this.length
    }

    deleteAll() {
        this.head = null
        this.tail = null
        this.length = 0
        console.log("\n✅ All nodes deleted successfully.")
    }

    deleteLastNode() {
        // Case 1: When L.L is empty
        if(this.length === 0) {
            console.log("Cannot delete node from empty L.L")
            console.log("Deletion failed.")
            return
        } else {
        // Case 2: When L.L is not empty
            // Sub-case 1: When L.L has only one node
            if(this.length === 1) 
                this.deleteAll()
            else {
                // Sub-case 2: When L.L has only two nodes
                if(this.length === 2) {
                    this.head.next = null
                    this.tail = this.head
                } else {
                // Sub-case 3: When L.L has more than two nodes
                    let temp = new Node()
                    temp = this.head 
                    while(temp.next.next !== null) {
                        temp = temp.next
                    }
                    temp.next = null
                }
                this.length--
                console.log("\n✅ 1 node deleted successfully.")
            }
        }
    }

    deleteFirstNode() {
        // Case 1: When L.L is empty
        if(this.length === 0) {
            console.log("Cannot delete node from empty L.L")
            console.log("Deletion failed.")
            return
        } else {
        // Case 2: When L.L is not empty
            // Sub-case 1: When L.L has only one node
            if(this.length === 1) 
                this.deleteAll()
            else {
                // Sub-case 2: When L.L has only two nodes
                let temp = new Node()
                temp = this.head.next
                this.head = temp
                this.length--
                console.log("\n✅ 1 node deleted successfully.")
            }
        }
    }

    updateNode(position=null, newValue=null) {
        // When user does not provide proper position or new value
        if(position===null || newValue===null || position>this.length || position<1){
            console.log("Warning: Cannot update node without a valid position/new value.\nUpdate operation failed.")
            return
        }

        if(this.length>0) { 
            let prevData = null
           // Case 1: Updating first node's data
           if(position === 1) {
                prevData = this.head.data
                this.head.data = newValue
           }
           // Case 2: Updating last node's data
           else if (position === this.length) {
                prevData = this.tail.data   
                this.tail.data = newValue
           }
           // Case 3: Updating middle node's data
           else {
            let temp = new Node()
            let pos = 1
            temp = this.head
            while(position !== pos) {
                temp = temp.next
                pos++
            }
            prevData = temp.data
            temp.data = newValue
           }
           console.log(`\n✅ 1 node data updated successfully. ( ${prevData} ----> ${newValue} )`)
        } else {
            console.log("Cannot update an empty L.L")
        }
    }

}

// Sample Execution
const myTodoList = new LinkedList()
myTodoList.append("Work on photo organizer project")
myTodoList.append("Daily DSA")
myTodoList.append("Meeting with Rakesh at 8 pm")
myTodoList.append("Eat dinner")
myTodoList.display()
myTodoList.prepend("Morning walk")
myTodoList.display()
myTodoList.appendAfter(2, "Call mom")
myTodoList.display()
myTodoList.showLength()
myTodoList.isExist("Daily DSA")
myTodoList.isExist("Watch Daredevil")
myTodoList.deleteLastNode()
myTodoList.display()
myTodoList.updateNode(4, "Daily DSA - complete linkedlist operations")
myTodoList.display()


/***
Available methods and their time growth:
1. append() - O(1)
2. prepend() - O(1)
3. appendAfter() - O(n)
4. display() - O(n)
5. isExist() - O(n)
6. showLength() - O(1)
7. deleteAll() - O(1)
8. deleteLastNode() - O(n)
9. deleteFirstNode() - O(1)
***/

