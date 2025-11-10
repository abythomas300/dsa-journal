// simple node creation
class Node {
  constructor(data) {
    this.data = data
  }
}

// creating some nodes
const n1 = new Node(40)
const n2 = new Node(71)
const n3 = new Node(903)
const n4 = new Node(-1)
const n5 = new Node(15)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

// setting the first node as head
let head = n1

//storing nodes in order
const nodes = [n1, n2, n3, n4]

// utility functions definition
function showAllData(nodes) {
  console.log("List of data inside each nodes:")
  nodes.forEach((node)=>{
    console.log(node.data)
  })
}

function getNodeCount(head) {
  count = 1
  currentNode = head
  // Checking whether given node is empty
  if(head.data === null){
    return "empty node"
  }
  console.log("Number of nodes in current list:")
  // Checking whether list has only one node
  if(head.next === null)
    return count
  // Looping through the given list
  while(currentNode.next){
    count += 1
    currentNode =  currentNode.next
  }
  return count
}

function getTotalValue(nodes) {
  let sum = 0
  nodes.forEach((node)=>{
    sum += node.data
  })
  console.log("Total value:", sum)
}

// FUNCTION CALL
showAllData(nodes) // display data part of all nodes
getNodeCount(head) // display total number of nodes in the list
getTotalValue(nodes) // sum of all values in current list
