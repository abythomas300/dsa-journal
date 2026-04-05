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

    append(value) {
        // If user did't provide a value
        if(value === undefined) {
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

    prepend(value) {
        // If user did't provide a value
        if(value === undefined) {
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

    appendAfter(position, value) {
        // If user does not provide a proper position or value
        if(position===undefined ||value===undefined || position===0 || position < 0 || position > this.length) {
            console.log("Warning: Provide a valid position/value to append the node.")
            console.log("Append operation failed.")
            return
        }

        // Case 1: When user provided the last position
        if(position === this.length || ((position === 1) && (this.length === 1)) ) 
            this.append(value)
        else {
        // Case 2: When user provided any middle position
            const newNode = new Node(value)
            let temp = this.head
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
        if(this.length === 0) 
            console.log("L.L is empty.")   
         else {
        // Case 2: When L.L is not empty
            console.log("\n***** MY TO-DO LIST *****")
            let serial_no = 1
            let temp = this.head
            while(temp !== null) {
                console.log(`${serial_no}. ${temp.data}`)
                temp = temp.next
                serial_no++
                }
            }
            
    } 

    isExist(value) {
        // If user does not provide a target value
        if(value === undefined) {
            console.log("Warning: Cannot search node without a target value, input a valid value first.")
            console.log("Search operation failed.")
            return
        }
        // Case 1: When L.L is empty
        if(this.length === 0) {
            console.log("Cannot find target value in an empty L.L")
        } else {
        // Case 2: When L.L is not empty
            const targetValue = value.toLowerCase()
            // Sub-Case 1: When target value's first occurance is in the head node
            if(this.head.data.toLowerCase() === targetValue) {
                console.log(`${this.head.data} exists atleast once in this L.L (First occurance at node number 1)`)
                return 
            }
            // Sub-Case 2: When target value's first occurance is in the tail node
            if(this.tail.data.toLowerCase() === targetValue) {
                console.log(`${this.tail.data} exists atleast once in this L.L (First occurance at node number ${this.length})`)
                return 
            }
            // Sub-Case 3: When target value's first occurance is in the middle
            let temp = this.head
            let current_pos = 1
            let flag = false
            while(temp !== null) {
                if(temp.data.toLowerCase() == value.toLowerCase()) {
                    console.log(`${temp.data} exists atleast once in this L.L (First occurance at node number ${current_pos})`)
                    flag = true
                    break
                }
                temp = temp.next
                current_pos++
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
                    let temp = this.head 
                    while(temp.next.next !== null) {
                        temp = temp.next
                    }
                    temp.next = null
                    this.tail = temp
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
                // Sub-case 2: When L.L has more than one nodes
                let temp = this.head.next
                this.head = temp
                this.length--
                console.log("\n✅ 1 node deleted successfully.")
            }
        }
    }

    updateNode(position, newValue) {
        // When user does not provide proper position or new value
        if(position===undefined || newValue===undefined || position>this.length || position<1){
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
            let temp = this.head
            let pos = 1
            while(position !== pos) {
                temp = temp.next
                pos++
            }
            prevData = temp.data
            temp.data = newValue
           }
           console.log(`\n✅ 1 node data updated successfully. ( ${prevData} ----> ${newValue} )`)
        }
    }

}

// Sample Execution
// const myTodoList = new LinkedList()
// myTodoList.append("Work on photo organizer project")
// myTodoList.append("Daily DSA")
// myTodoList.append("Meeting with Rakesh at 8 pm")
// myTodoList.append("Eat dinner")
// myTodoList.display()
// myTodoList.prepend("Morning walk")
// myTodoList.display()
// myTodoList.appendAfter(2, "Call mom")
// myTodoList.display()
// myTodoList.showLength()
// myTodoList.isExist("Daily DSA")
// myTodoList.isExist("Watch Daredevil")
// myTodoList.deleteLastNode()
// myTodoList.display()
// myTodoList.updateNode(4, "Daily DSA - complete linkedlist operations")
// myTodoList.display()


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
10. updateNode() - O(n)
***/

